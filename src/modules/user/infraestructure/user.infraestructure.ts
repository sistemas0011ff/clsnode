import User, { UserProperties } from "../domain/user";
import UserFactory from "../domain/user.factory";
import { UserRepository } from "../domain/user.repository";
import { EmailVO } from "../domain/value-objects/email.vo";

const users : User[] = [
    new UserFactory().create( "John", "Fajardo", EmailVO.create("efajardo@gmail.com"), "123" ),
    new UserFactory().create( "Eduardo", "Fajardo", EmailVO.create("efajardo@gmail.com"),  "123")
]

export default class UserInfraestructure implements UserRepository {
    list(): UserProperties[] {
        return users.filter((el:User)=>el.properties().active).map((el : User) => el.properties()) 
    }
    listOne(guid: string): User {
        // return Object.assign(
        //     {},
        //     users.find((el:User) => el.properties().guid === guid )); 

        //Se comenta por q no se requiere convertir a json
        // return Object.assign(
        //     {},
        //     users.find((el:User) => {
        //         console.log(JSON.stringify(el.properties()));
        //         return el.properties().guid === guid ;
        //     }));     
        
        //Sin llaves
        // return users.find((el:User) => {
        //             console.log(JSON.stringify(el.properties()));
        //             return el.properties().guid === guid ;
        //         })

        return users.filter((el:User)=>el.properties().active).find((el:User) => 
                el.properties().guid === guid 
        )
    }
    insert(user: User): UserProperties {
        // console.log("User inserted: ", user);
        users.push(user);
        return user.properties();
    }
    update(user: User): any {
        const { guid, name, lastname, email, password } = user.properties();
        // const userFound = users.find((el: User)=> el.properties().guid === guid)
        const userIndex = users.findIndex(
            (el: User)=> el.properties().guid === guid
            );

        users[userIndex] = user;
        return user;
    }
    // delete(user: User): void {
    //     user.delete();
    // }

}