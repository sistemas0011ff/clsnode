//Se comento por uso de express
// import http, {IncomingMessage, ServerResponse} from 'http';
import http from 'http';
import {Application} from 'express';
// export interface Bootstrap {
//     initialize: () => void ;
// }


//No devuelve nada el contrato de tipo clase abtracta
/*
export abstract class Bootstrap{
    abstract initialize() : void
}
*/
export abstract class Bootstrap{
    abstract initialize() : Promise<any>;
}

// // export default class ServerBootstrap {
//Ejemplo de clase anonima
//EJEMPLO CALSE IMPLEMENTA INTERFAZ
//export default class  implements Bootstrap{
//Ejemplo de clase que implementa una clase abstracta como interfax
export default class  extends Bootstrap{

    //app : (req: IncomingMessage, res: ServerResponse) =>  void;

    // El constructor resivirá un parámetro de tipo (request y response)
    // constructor(app: (req: IncomingMessage, res: ServerResponse) => void){
    //     super();
    //     this.app = app;
    // }

    //Cambiando el modificador de acceso para que pueda crear la propiedad de formaautomática
    constructor(
        //Se comenta para indicacrle que la propiedad app, reciba como parámetro la propiedad APPLICATION DE express que exporta la capa APP.ts
        //private readonly app: (req: Request, res: Response) => void
        //se agregó para indeicar que la propiedad app sea de tipo Application, que es una classe del framework EXPRESS
        private readonly app: Application,
        ){
        super();
        // this.app = app;
    }

    initialize() {
        //creando conexión al servidor
        //const promise = new Promise<any>((resolve, reject)=> {
        return new Promise<any>((resolve, reject)=> {

            //Luego del cambio realizado en la parte del constructor
            //ahora se esta creando un servidor que recibe como parametro un objeto de tipo express    
            const server = http.createServer(this.app);
            /*
            //La constante server recibe el resultado de las rutas solicitadas
            //tener en cuenta que el método createserver esta esperando un http
            //esto será remplazado por una clase del tipo HTTP
            const server = http.createServer((request: http.IncomingMessage, 
                                              response: http.ServerResponse) => {
                const route: Route | undefined = getRoute(request.url as string);
                if (route) {
                    route.execute(request, response);
                } else {
                    exceptionNotFound(request, response);
                }
            });
            */
            /*    
            server
            .listen(3001)
            .on("listening", ()=> console.log("Listening on port: 3001") )
            // .on("error", (error)=> console.log(error));
            .on("error", console.log);
            */
           server
           .listen("3001")
           .on("listening", ()=> {
               resolve("Promise resolve successfully");
               console.log("Listening in port 3001");
           })
           .on("error", (error) => {
               reject(error);
               console.log(error);
           })

        });
        // server.listen(3001, () => console.log("Ejecutando en el puerto : 3001"));
        // server.listen(3001);
        // server.on("listening", ()=> console.log("Listening on port: 3001") );
        // server.on("error", (error)=> console.log(error));

    }

    verifyPort() {}
}







