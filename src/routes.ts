// import http from 'http'; //se comentó por que se usará express
import express, {Request, Response} from 'express';
//Definiendo interfaz para rutas
export default interface Route{
    path: String;
    execute: (
        //Se comentó para agregar las interfaces de express
        // request: http.IncomingMessage, 
        // response: http.ServerResponse
        //Se esta trabajando con las interfaces de express
        request: express.Request, 
        response: express.Response
        ) 
        => void;
}

type route = Route[];

//Definiendo Rutas
const routes : route =
    [
        //Ruta 01
        {
            path: "/users/descripcion",
            execute (request: Request, response: Response)  {


                //Se cambia a la forma mas corta de mostrar los mensaje
                response
                // .status(200) //si no se pone nada, por defecto es 200
                // .type("text/plain") // Si no se pone nada por defecto es text-plain
                .send("Usuario: Eduardo")

                /*
                // Reemplazando la forma de usar la srutas
                response.writeHead(200, { "Content-type": "text/plain" });
                response.write("Usuario: Eduardo");
                response.end();
                */
            }
        },
        //Ruta 02   
        {
            path: "/users/list",
            // execute : (request: http.IncomingMessage, response: http.ServerResponse) => { //Se comenta por que se agregó express
                execute : (request: Request, response: Response) => {
                response.status(200)
                .type("application/json")
                .json([{ username: "ana", active: false }, { username: "pepE", active: false }, { username: "eduardo2", active: true }, { username: "eduardo3", active: true }]);
                /*
                response.writeHead(200, { "Content-type": "application/json" });
                response.write(JSON.stringify([{ username: "ana", active: false }, { username: "pepE", active: false }, { username: "eduardo2", active: true }, { username: "eduardo3", active: true }]));
                response.end();
                */
            }
        }
    ];

//// Función para buscsar rutas    
export const getRoute = (path : string): Route | undefined =>  routes.find( (route: Route) => route.path === path)

// //// Creando exceptions
// export const exceptionNotFound = (request: http.IncomingMessage, response: http.ServerResponse) =>
// {
//     response.writeHead(404, { "content-type": "text/plain" });
//     response.write("Error - url no encontrada");
//     response.end();
// }


//// Creando exceptions
//formalizando la repuesta, que no devolverá nada VOID - vacío
//export const exceptionNotFound = (request: http.IncomingMessage, response: http.ServerResponse)
export const exceptionNotFound = (request: Request, response: Response)
: void =>
{
    response.status(404).type("text/plain").send("Error - url no encontrada"); 

    // response.writeHead(404, { "content-type": "text/plain" });
    // response.write("Error - url no encontrada");
    // response.end();
}

