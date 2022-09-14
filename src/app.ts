
// import {IncomingMessage, ServerResponse} from 'http';
//Se comento http por q ese esta usando express
import  {Request, Response} from 'express';
import Route, { exceptionNotFound, getRoute } from "./routes";
import express, {Application} from 'express'




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
        
    }

    mountRoutes():void {
        this.expressApp.get(
            "/user/info",
            (req: Request, res: Response) => {
                res.send("<h1>Usuaior:Eduardo</h1>")    
            })
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