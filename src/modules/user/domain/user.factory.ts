import { v4 as uuidv4 } from 'uuid';
import { UserPasswordServices } from './services/user-password.services';
import User, { UserProperties } from './user';
import { EmailVO } from './value-objects/email.vo';


export default class UserFactory {

//Acá pueden
/*
2. Consideraciones. El await asignado en el password hash, espera un await y 
el await trabaja directamente con el async
*/
async create(
    name: string,
    lastname: string,
    // email: string,
    email :  EmailVO,
    password: string
){    
// create(
//         name: string,
//         lastname: string,
//         // email: string,
//         email :  EmailVO,
//         password: string
//     ){

    

        /*
        1. Consideraciones: El método bcrypt.hash esta devolviendo un PROMISE, entonces deberíamos esperar que esa
        promesa se cumpla o no.
        Ahora para decirle que vamos a esperar que se cumpla la promesa tenemos que trabajar con el AWAIT
        */
        // const passwordHash = bcrypt.hash(password,10);
        // const passwordHash = await bcrypt.hash(password,10); //Extrayendo esta logica a un services  -SOLID - SINGLE RESPOSABILITI
        const passwordHash = await UserPasswordServices.hash(password)

        const userPropierties : UserProperties = {
            name,
            lastname,
            email,
            password: passwordHash,
            guid: uuidv4(),
            refreshtoken : uuidv4(),
        }

        const user = new User(userPropierties);

        return user;
    }


}