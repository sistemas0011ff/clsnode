"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_bootstrap_1 = __importDefault(require("./boottrap/server.bootstrap"));
const serverBootstrap = new server_bootstrap_1.default();
serverBootstrap.initialize();
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
//# sourceMappingURL=index.js.map