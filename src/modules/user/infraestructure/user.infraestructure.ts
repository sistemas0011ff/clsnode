import User, { UserProperties } from "../domain/user";
import UserFactory from "../domain/user.factory";
import { UserRepository } from "../domain/user.repository";

const users : User[] = [
    new UserFactory().create( "John", "Fajardo", "efajardo@gmail.com", "123" ),
    new UserFactory().create( "Eduardo", "Fajardo", "efajardo@gmail.com",  "123")
]

export default class UserInfraestructure implements UserRepository {
    list(): UserProperties[] {
        return users.map((el : User) => el.properties());
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

        return users.find((el:User) => 
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
        return users;
    }
    delete(user: User): void {
        user.delete();
    }

}