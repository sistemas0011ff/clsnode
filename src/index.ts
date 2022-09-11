import ServerBootstrap, {Bootstrap} from "./boottrap/server.bootstrap";

const serverBootstrap: Bootstrap = new ServerBootstrap();



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
