import express, {Application} from 'express';
// import routerUser from './modules/user/interfaces/http/router';
import routerUser from './modules/user/interfaces/http/router';
import handlerErrors from './helpers/errors';
import routerHealth from './helpers/health';

class App {
    readonly expressApp : Application ;
    constructor(){
        //Se inicializa la propiedad
        this.expressApp = express(); //Inicializando la interfaz application
        //Se cargan las rutas
        this.mountHealthCheck();
        this.mountRoutes();
        this.mountError();        
    }

    //Función para validar si la ruta esta activa
    mountHealthCheck()
    {
        this.expressApp.use("/", routerHealth);
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
        console.log("Entro a error");           
        this.expressApp.use(handlerErrors.notFound)
            //Se comenta por que será remplazado por clase
            //res.status(400).send("Path not found");
        // https://stackoverflow.com/questions/15601703/difference-between-app-use-and-app-get-in-express-js
        //Se reemplaza.. quitando lso ** ya que si no se tiene esos asteriscos que significa
        //todos.. hace los mismo
        // this.expressApp.use("**",(req: Request, res: Response)=>{
        //     res.status(400).send("Path not found");
        // })

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
