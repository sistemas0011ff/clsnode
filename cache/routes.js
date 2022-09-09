"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionNotFound = exports.getRoute = void 0;
//Definiendo Rutas
const routes = [
    //Ruta 01
    {
        path: "/users/descripcion",
        execute(request, response) {
            response.writeHead(200, { "Content-type": "text/plain" });
            response.write("Usuario: Eduardo");
            response.end();
        }
    },
    //Ruta 02   
    {
        path: "/users/list",
        execute: (request, response) => {
            response.writeHead(200, { "Content-type": "application/json" });
            response.write(JSON.stringify([{ username: "ana", active: false }, { username: "pepE", active: false }, { username: "eduardo2", active: true }, { username: "eduardo3", active: true }]));
            response.end();
        }
    }
];
//// Función para buscsar rutas    
const getRoute = (path) => routes.find((route) => route.path === path);
exports.getRoute = getRoute;
// //// Creando exceptions
// export const exceptionNotFound = (request: http.IncomingMessage, response: http.ServerResponse) =>
// {
//     response.writeHead(404, { "content-type": "text/plain" });
//     response.write("Error - url no encontrada");
//     response.end();
// }
//// Creando exceptions
//formalizando la repuesta, que no devolverá nada VOID - vacío
const exceptionNotFound = (request, response) => {
    response.writeHead(404, { "content-type": "text/plain" });
    response.write("Error - url no encontrada");
    response.end();
};
exports.exceptionNotFound = exceptionNotFound;
//# sourceMappingURL=routes.js.map