import { Router, Request , Response} from "express";
import UserApplication from "../../application/user.application";
import { UserRepository } from "../../domain/user.repository";
import UserInfraestructure from "../../infraestructure/user.infraestructure";
import Controller from './controller';

const infraestructure: UserRepository = new UserInfraestructure();
const application = new UserApplication(infraestructure);
const controller = new Controller(application);

class UserRouter{
    expressRouter: Router;
    constructor(){
        this.expressRouter = Router();
        this.mountRoutes();
    }

    mountRoutes()
    {      
        this.expressRouter.get("/", (req:Request,res:Response)=> {
            controller.list(req, res);
        });

        this.expressRouter.get("/:guid", controller.listOne);
        this.expressRouter.post("/", controller.insert);
        this.expressRouter.put("/:guid", controller.update);
        this.expressRouter.delete("/:guid", controller.delete);
    }

}

export default new UserRouter().expressRouter