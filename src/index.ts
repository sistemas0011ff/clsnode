import ServerBootstrap, {Bootstrap} from "./boottrap/server.bootstrap";

const serverBootstrap: Bootstrap = new ServerBootstrap();

//serverBootstrap.initialize();
//controlando la respuesta del servidor
serverBootstrap
.initialize()
.then((message : string) =>  console.log(message))
.catch((error : any) => console.log(error));



//Se comenta por motivos que se ha creado la clase BOOTSTRAP

// import http from 'http';
// import Route, {getRoute, exceptionNotFound} from './routes';

// const server = http.createServer((request: http.IncomingMessage, response: http.ServerResponse) => 
// {
//     const route : Route | undefined = getRoute(request.url as string);
    
//     if (route){
//         route.execute(request,response);
//     }else{
//         exceptionNotFound(request, response);
//     }
// });

// server.listen(3001, () => console.log("Ejecutando en el puerto : 3000"));
