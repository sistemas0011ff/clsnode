import { Request, Response } from "express";
import UserApplication from "../../application/user.application";
import User from "../../domain/user";
import UserFactory from "../../domain/user.factory";
import { EmailVO } from "../../domain/value-objects/email.vo";
import { UserInsertDTO, UserInsertMapping } from "./dto/response/user-insert.dto";
import { UserListOneDTO, UserListOneMapping } from "./dto/response/user-list-one.dto";
import { UserListDTO, UserListMapping } from "./dto/response/user-list.dto";

export default class{

    constructor(private application: UserApplication ) {
        this.listOne = this.listOne.bind(this);
        this.insert = this.insert.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    list(req:Request, res:Response){

        const  list = this.application.list();
        const dto : UserListDTO = new UserListMapping().execute(list);
        res.json(dto);
    }

    listOne(req:Request, res:Response){    
        console.log("Intro: ListOne - Ini");
        const {guid} = req.params; //deestructuración        

        const list = this.application.listOne(guid).properties();
        const dto  : UserListOneDTO = new UserListOneMapping().execute(list);
        console.log("Intro: ListOne - Ini");
        res.json(dto);
    }


    //Se agregó las palabras reservada asyn y away respectivamente.
    //ya que fue cambiado el método createe para encriptar el password
    async insert(req:Request,res:Response){

        const {name, lastname, email, password} = req.body;
        const user: User =  await new  UserFactory().create(
            name, 
            lastname,
            EmailVO.create(email), 
            password);
        const result = this.application.insert(user);        
        res.json(result);

    }

    update(req:Request, res:Response){
        console.log("Intro - Update");
        const { guid }  = req.params;
        const { name, lastname, email, password } = req.body;

        const user = this.application.listOne(guid);
        user.update({
            name, 
            lastname, 
            email: EmailVO.create(email), 
            password });
        
        const data = this.application.update(user);
        const dto : UserInsertDTO = new UserInsertMapping().execute(data);
        
        res.json(dto);
    }

    delete(req:Request, res:Response){
        const {guid} = req.params;
        const user = this.application.listOne(guid);
        user.delete();
        const result = this.application.update(user);
        
        res.json(result);
    }
    
}