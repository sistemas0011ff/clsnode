import User, { UserProperties } from "../domain/user";
import { UserRepository } from "../domain/user.repository";


const users : any[] = [
     {
        name:"John", 
        lastname:"Fajardo", 
        email:"efajardo@gmail.com", 
        password:"123",
        active:true, 
        refreshtoken:"abc",
        guid: "c2db12f8-43c5-4031-82b9-ef16747cad8d"
    },
    {
        name:"Eduardo", 
        lastname:"Fajardo", 
        email:"efajardo@gmail.com", 
        password:"123",
        active:true, 
        refreshtoken:"abc",
        guid: "d9fbdd6d-2ceb-43ac-9be7-4a81ebdb0156"
    }
]

export default class UserInfraestructure implements UserRepository {
    list(): User[] {
        return users;
    }
    listOne(guid: string): User {
        return Object.assign({},users.find((el:User) => el.properties().guid === guid ));
    }
    insert(user: User): UserProperties {
        // console.log("User inserted: ", user);
        users.push(user.properties());
        return user.properties();
    }
    update(user: User): void {
        console.log("User update: ", user);
    }
    delete(user: User): void {
        user.delete();
    }

}