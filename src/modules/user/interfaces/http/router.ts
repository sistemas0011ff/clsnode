import { Router, Request , Response} from "express";
import UserApplication from "../../application/user.application";
import { UserRepository } from "../../domain/user.repository";
import UserInfraestructure from "../../infraestructure/user.infraestructure";
import Controller from './controller';

const infraestructure: UserRepository = new UserInfraestructure();
const application = new UserApplication(infraestructure);
const controller = new Controller(application);

//Esta clase se comportará como un delegador de rutas
class UserRouter{
    expressRouter: Router;
    constructor(){
        //Inicializando variable anterior para que no de errores.
        this.expressRouter = Router();
        this.mountRoutes();
    }

    //Montamos las rutas, similar a la clase app
    mountRoutes()
    {      
        //Arquitectura FASE2- Ejemplo de uso de no bindeo.. uso desde el controller
        //this.expressRouter.get("/", controller.list);
        this.expressRouter.get("/", (req:Request,res:Response)=> {
            controller.list(req, res);
        });

        //Usando otra forma de interactuar con el controller - BIND
        
        this.expressRouter.get("/:guid", controller.listOne);
        this.expressRouter.post("/", controller.insert);
        /*
        //2. Se comentó por que se va a trabajar con los componentes de la arquitectura
        //Se obtiene lógica de las rutas desde el controlador  
     
        this.expressRouter.get("/description", controller.decription)
        this.expressRouter.get("/list",controller.lis)
        this.expressRouter.get("/detail",controller.lis)
        this.expressRouter.get("/delete",controller.delete)
        */

     /*
     //Se comenta.. por que se traerá la logica de los routers en el controlador
        this.expressRouter.get("/description",(req: Request, res: Response)=>{
            // console.log(req);
            res.send("<h1>Usuaior:Eduardo Fajardo</h1>")    
        })
        this.expressRouter.get("/list",(req:Request, res:Response)=>{
            res.json([{username:"efajardo", active:true},
            {username:"rfigueroa", active:true}])    
        })
        this.expressRouter.get("/detail",(req:Request, res:Response)=>{
            res.json([{username:"hhidalgo", active:true}])    
        })
        this.expressRouter.get("/delete",(req:Request, res:Response)=>{
            res.send("User delete successfully");
        })
      */  
    }

}

export default new UserRouter().expressRouter