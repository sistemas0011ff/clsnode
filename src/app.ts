
import {IncomingMessage, ServerResponse} from 'http';
import Route, { exceptionNotFound, getRoute } from "./routes";
//Clase que hace refeerncia a APPLICATION  de la arquitectura HEXAGONAL
//Se quitó el nombre de la clase.. para ser llamada como clase anonima
export default class {
    static requestListener (request: IncomingMessage, response: ServerResponse) {
        const route: Route | undefined = getRoute(request.url as string);
        if (route) {
            route.execute(request, response);
        } else {
            exceptionNotFound(request, response);
        }
    }
}