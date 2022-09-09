import http from 'http';
import Route, { getRoute, exceptionNotFound } from '../routes';




// export interface Bootstrap {
//     initialize: () => void ;
// }

export abstract class Bootstrap{
    abstract initialize() : void
}

// // export default class ServerBootstrap {
//Ejemplo de clase anonima
//EJEMPLO CALSE IMPLEMENTA INTERFAZ
//export default class  implements Bootstrap{
//Ejemplo de clase que implementa una clase abstracta como interfax
export default class  extends Bootstrap{
    

    initialize() {

        const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {

            const route: Route | undefined = getRoute(request.url as string);

            if (route) {
                route.execute(request, response);
            } else {
                exceptionNotFound(request, response);
            }
        });


        // server.listen(3001, () => console.log("Ejecutando en el puerto : 3001"));
        // server.listen(3001);
        // server.on("listening", ()=> console.log("Listening on port: 3001") );
        // server.on("error", (error)=> console.log(error));

        server
        .listen(3001)
        .on("listening", ()=> console.log("Listening on port: 3001") )
        .on("error", (error)=> console.log(error));
    }

    verifyPort() {}



}







