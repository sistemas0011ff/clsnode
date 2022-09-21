import { Request, Response } from "express";
import UserApplication from "../../application/user.application";
import User, { UserInsert, UserProperties } from "../../domain/user";
// import { UserRepository } from "../../domain/user.repository";
// import UserInfraestructure from "../../infraestructure/user.infraestructure";


//Esto lo pasamos al controller para que sea inyectado
//En esta parte visualizamos la aplicación de la arquitectura
/*
Se puede evidenciar que se esta interactuando 
la capa APPLICATIO-CORE con la INFRAESTRUCTURE-adapater  a travez del PUERTO-repository
*/
//Se comenta por que se pasa al contrcutor
//const infraestructure: UserRepository = new UserInfraestructure();

//Esta parte se conoce como la inyección de dependencia 
//Se comenta por que se pasa al contrcutor
// const application = new UserApplication(infraestructure);

export default class{

    constructor(private application: UserApplication ) {
        //Se comenta para usar de otra manera el BIND en el cotroller
        //this.list = this.list.bind(this);
        this.listOne = this.listOne.bind(this);
        this.insert = this.insert.bind(this);
    }

    list(req:Request, res:Response){
        //Obteniendo respuesta de la arquitectura usada
        const  list = this.application.list();
        // return res.json(list);
        res.json(list);
    }

    listOne(req:Request, res:Response){
        
        // const id = +req.params.id ; //Conviertiendo a number
        // const {id} = req.params; //deestructuración        
        // const list = this.application.listOne(+id);
        //Se cambió el id POR EL GUID, por eso se comenta lo anterior
        const {guid} = req.params; //deestructuración        
        const list = this.application.listOne(guid);

        res.json(list);
        // return this.application.listOne(1);
    }

    insert(req:Request,res:Response){
        // res.json(req.body);
        const body : UserInsert = req.body;
        const properties : UserProperties = {
            name : body.name,
            lastname : body.lastname,
            email : body.email,
            password :  body.password
        };

        const user = new User(properties);
        
        const result = this.application.insert(user);

        //Creando instancia con datos para testear función
        
        // const properties : UserProperties = {
        //     id:10,
        //     name: "Eduardo",
        //     lastname : "Fajardo",
        //     email: "efajardo@xxx.com",
        //     password: "1234",
        //     refreshtoken:"abc"
        // };

        // const user : User = new User(properties);
        // return this.application.insert(user);
    }

    update(req:Request, res:Response){
        // const properties : UserProperties = {
        //     id:1,
        //     name: "Eduardo",
        //     lastname : "Fajardo",
        //     email: "efajardo@xxx.com",
        //     password: "1234",
        //     refreshtoken:"abc"
        // };

        // const user : User = new User(properties);
        // return this.application.update(user);
    }

    delete(req:Request, res:Response){
        // const properties : UserProperties = {
        //     id:1,
        //     name: "Eduardo",
        //     lastname : "Fajardo",
        //     email: "efajardo@xxx.com",
        //     password: "1234",
        //     refreshtoken:"abc"
        // };

        // const user : User = new User(properties);

        // return this.application.delete(user);
    }
    // decription(req:Request,res:Response) {
    //     res.send("<h1>Usuaior:Eduardo Fajardo</h1>");     
    // }  

    // lis(req:Request, res:Response){
    //     res.json([{username:"efajardo", active:true},
    //         {username:"rfigueroa", active:true}])  ;  
    // }

    // detail(req:Request, res: Response){
    //     res.json([{username:"hhidalgo", active:true}])  ;  
    // }

    // delete(req:Request,res:Response){
    //     res.send("User delete successfully");
    // }
}