import http from 'http';

const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse )=>{

    console.log("reues", request.url);

    if (request.url === "/usuario"){
        response.writeHead(200, {"content-type":"text/plain"});
        response.write("the app is running - usuarios");
        response.end();
    }
    else if (request.url === "/usuario/list") {    
        response.writeHead(200, {"content-type":"application/json"})
        response.write(JSON.stringify([{username:"eduardo", active:true},{username:"eduardo", active:true}]));
        response.end();
    }else{
        response.writeHead(404,{"content-type":"text/plain"});
        response.write("Error - url no encontrada");
        response.end();
    }

});

server.listen(3000, ()=> console.log("Ejecutando en el puerto : 3000") );
