import http from 'http';

//Definiendo Rutas
const routes =
    [
        //Ruta 01
        {
            path: "/users/descripcion",
            execute: (request: http.IncomingMessage, response: http.ServerResponse) => {
                response.writeHead(200, { "Content-type": "text/plain" });
                response.write("Usuario: Eduardo");
                response.end();
            }
        },
        //Ruta 02   
        {
            path: "/users/list",
            excute: (request: http.IncomingMessage, response: http.ServerResponse) => {
                response.writeHead(200, { "Content-type": "application/json" });
                response.write(JSON.stringify([{ username: "ana", active: false }, { username: "pepE", active: false }, { username: "eduardo2", active: true }, { username: "eduardo3", active: true }]));
                response.end();
            }
        }
    ];


//Función para leer rutas
// const getRoute = (path : string): any => {
//     return routes.find(route => route.path === path)
// }

const getRoute = (path : string): any =>  routes.find(route => route.path === path)


const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {


    //console.log(parseFloat('123456789101112.213213'));

    console.log("reues", request.url);

    if (request.url === "/usuario") {
        response.writeHead(200, { "content-type": "text/plain" });
        response.write("the app is running - usuarios");
        response.end();
    }
    else if (request.url === "/usuario/list") {
        response.writeHead(200, { "content-type": "application/json" })
        response.write(JSON.stringify([{ username: "ana", active: false }, { username: "pepE", active: false }, { username: "eduardo2", active: true }, { username: "eduardo3", active: true }]));
        response.end();
    } else {
        response.writeHead(404, { "content-type": "text/plain" });
        response.write("Error - url no encontrada");
        response.end();
    }

});

server.listen(3001, () => console.log("Ejecutando en el puerto : 3000"));
