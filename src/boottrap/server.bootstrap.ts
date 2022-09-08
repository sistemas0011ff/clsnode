import http from 'http';
import Route, { getRoute, exceptionNotFound } from '../routes';

// // export default class ServerBootstrap {
//Ejemplo de clase anonima
export default class {

    initialize() {

        const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
            
            const route: Route | undefined = getRoute(request.url as string);

            if (route) {
                route.execute(request, response);
            } else {
                exceptionNotFound(request, response);
            }
        });

        server.listen(3001, () => console.log("Ejecutando en el puerto : 3001"));
    }

}







