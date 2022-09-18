
// import {IncomingMessage, ServerResponse} from 'http';
//Se comento http por q ese esta usando express
import  {Request, Response} from 'express';
import express, {Application} from 'express';
import routerUser from './modules/user/interfaces/router';
import handlerErrors from './helpers/errors'

//Clase que hace refeerncia a APPLICATION  de la arquitectura HEXAGONAL
//Clase modificada paraa interactuar con el framwork express
// export default class {
class App {

    //Se inicializa "Application" = variable 
    //* Crea una aplicación Express. La función express() es una función de nivel superior exportada por el módulo express.
    //expressApp : Application =  express();
    //Se requiere que esta propiedad no sea modificada
    readonly expressApp : Application ;

    constructor(){
        //Se inicializa la propiedad
        this.expressApp = express(); //Inicializando la interfaz application
        //Se cargan las rutas
        this.mountRoutes();
        this.mountError();
        
    }
    //Montando RUTAS con express
    mountRoutes():void 
    {

        console.log("log de rutas");
        //Se agrega código para trabajar con la ruta padre
        //use = es como un like... va a fultrar las rutas padre que inicien con USER

        //para cualquier ruta padre que empece con use,
        //Quiero que el manejador de ruts se RouterUser
        this.expressApp.use("/user",routerUser);

       
        //Se comenta las rutas creadas anteriormente ya que lo vamos a trabajar... con  la ruta padre de forma modular
 
 /*
        this.expressApp.get(
        "/user/info",
        (req: Request, res: Response) => {
            res.send("<h1>Usuaior:Eduardo</h1>")    
        });
 
        this.expressApp.get(
            "/user/list",
            (req: Request, res: Response) => {
                res.json([{username:"efajardo", active:true},
                          {username:"rfigueroa", active:true}])    
            });
 
            this.expressApp.get(
            "/user/detail",
            (req: Request, res: Response) => {
                res.json([{username:"hhidalgo", active:true}])    
            });
        this.expressApp.get(
            "/user/delete",
            (req: Request, res: Response) => {
                res.send("User delete successfully");
            });

        */    
    
       
    }
    //Montando rutas para controlar el caso de errores
    mountError():void
    {
        // this.expressApp.use((req: Request, res: Response)=>{
        //     handlerErrors.notFound
        //     //Se comenta por que será remplazado por clase
        //     //res.status(400).send("Path not found");
        // })
        // https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js
        //Se reemplaza.. quitando lso ** ya que si no se tiene esos asteriscos que significa
        //todos.. hace los mismo
        this.expressApp.use("**",(req: Request, res: Response)=>{
            res.status(400).send("Path not found");
        })

        // this.expressApp.get("**",(req:Request, res:Response)=>{
        //     res.status(404).send("Path not found");
        // })
        // this.expressApp.post("**",(req:Request, res:Response)=>{
        //     res.status(404).send("Path not found");
        // })
        // this.expressApp.put("**",(req:Request, res:Response)=>{
        //     res.status(404).send("Path not found");
        // })
        // this.expressApp.delete("**",(req:Request, res:Response)=>{
        //     res.status(404).send("Path not found");
        // })
        // this.expressApp.options("**",(req:Request, res:Response)=>{
        //     res.status(404).send("Path not found");
        // })
    }

}

//en esta parte le decimos que solo exporte la instancia de la calse pero solo  la propiedada expressApp
export default new App().expressApp;


/*
//Se comentó ya que en la parte superior se realizó cambios para interactuar con el framework de express   

//Clase que hace refeerncia a APPLICATION  de la arquitectura HEXAGONAL
//Se quitó el nombre de la clase.. para ser llamada como clase anonima
export default class {
    //Se comentó el http ya que se esta usando express
    // static requestListener (request: IncomingMessage, response: ServerResponse) {       
    static requestListener (request: Request, response: Response) {
        const route: Route | undefined = getRoute(request.url as string);
        if (route) {
            route.execute(request, response);
        } else {
            exceptionNotFound(request, response);
        }
    }
}

*/