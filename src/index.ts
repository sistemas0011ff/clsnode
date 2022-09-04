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

//// Función para buscsar rutas    
const getRoute = (path : string): any =>  routes.find(route => route.path === path)

//// Creando exceptions
const exceptionNotFound = (request: http.IncomingMessage, response: http.ServerResponse) =>{
    response.writeHead(404, { "content-type": "text/plain" });
    response.write("Error - url no encontrada");
    response.end();
}

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => {
    const route = getRoute(request.url as string);
    
    if (route){
        route.excute(request,response);
    }else{
        exceptionNotFound(request, response);
    }
});

server.listen(3001, () => console.log("Ejecutando en el puerto : 3000"));
