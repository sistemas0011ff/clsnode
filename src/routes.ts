import http from 'http';

//Definiendo interfaz para rutas
export default interface Route{
    path: String;
    execute: (request: http.IncomingMessage, response: http.ServerResponse) => void;
}

type route = Route[];

//Definiendo Rutas
const routes : route =
    [
        //Ruta 01
        {
            path: "/users/descripcion",
            execute (request: http.IncomingMessage, response: http.ServerResponse)  {
                response.writeHead(200, { "Content-type": "text/plain" });
                response.write("Usuario: Eduardo");
                response.end();
            }
        },
        //Ruta 02   
        {
            path: "/users/list",
            execute : (request: http.IncomingMessage, response: http.ServerResponse) => {
                response.writeHead(200, { "Content-type": "application/json" });
                response.write(JSON.stringify([{ username: "ana", active: false }, { username: "pepE", active: false }, { username: "eduardo2", active: true }, { username: "eduardo3", active: true }]));
                response.end();
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
export const exceptionNotFound = (request: http.IncomingMessage, response: http.ServerResponse)
: void =>
{
    response.writeHead(404, { "content-type": "text/plain" });
    response.write("Error - url no encontrada");
    response.end();
}

