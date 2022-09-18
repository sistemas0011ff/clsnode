import { Router, Request , Response} from "express";

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
        
        this.expressRouter.get("/description",(req: Request, res: Response)=>{
            console.log(req);
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
    }

}

export default new UserRouter().expressRouter