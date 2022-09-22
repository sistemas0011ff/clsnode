import { Request, Response } from "express";
import UserApplication from "../../application/user.application";
import User from "../../domain/user";
import UserFactory from "../../domain/user.factory";

export default class{

    constructor(private application: UserApplication ) {
        this.listOne = this.listOne.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
    }

    list(req:Request, res:Response){
        const  list = this.application.list();
        res.json(list);
    }

    listOne(req:Request, res:Response){    
        console.log("Intro: ListOne - Ini");
        const {guid} = req.params; //deestructuración        
        
        const list = this.application.listOne(guid);
        console.log("Intro: ListOne - Ini");
        res.json(list);
    }

    insert(req:Request,res:Response){

        const {name, lastname, email, password} = req.body;
        const user: User = new UserFactory().create(name, lastname, email, password);
        const result = this.application.insert(user);        
        res.json(result);

    }

    update(req:Request, res:Response){
        console.log("Intro - Update");
        const { guid }  = req.params;
        const { name, lastname, email, password } = req.body;

        const user = this.application.listOne(guid);
        user.update({name, lastname, email, password });
        
        const result = this.application.update(user);
        
        res.json(result);
    }

    delete(req:Request, res:Response){
        
    }
    
}