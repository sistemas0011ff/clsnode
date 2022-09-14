import app from "./app";
import ServerBootstrap, {Bootstrap} from "./boottrap/server.bootstrap";

// const application = new app();
//Se comento para aplicar express
//const serverBootstrap: Bootstrap = new ServerBootstrap(app.requestListener);
//Ahora serverbootstrap recibirá un objeto express que contiene las rutas y otras propiedades
//en este caso las rutas se definieron el el APP.ts
const serverBootstrap: Bootstrap = new ServerBootstrap(app);


/* 
//Comentado para camboiarlo por una función anónima autoemvocada
//Función de tipo ASYNC que permite validar la conexión con el servidor
const start =async () => {
    try
    {
        const resultServer = await serverBootstrap.initialize();
        console.log(resultServer);
    }
    catch(error)
    {
        console.log(error);
    }
}

//Ejecutando función async
start();
*/

//Función Auto invocada
(async () => {
    try
    {
        const resultServer = await serverBootstrap.initialize();
        console.log(resultServer);
    }
    catch(error)
    {
        console.log(error);
    }
})()



//serverBootstrap.initialize();
//controlando la respuesta del servidor
//Se comentó para poner el ejemplo con el AWAIT
// serverBootstrap
// .initialize()
// .then((message : string) =>  console.log(message))
// .catch((error : any) => console.log(error));

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
