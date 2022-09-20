import User from "../domain/user";
import { UserRepository } from "../domain/user.repository";


const users : User[] = [
    new User({
        id:1, name:"John", lastname:"Fajardo", email:"efajardo@gmail.com", password:"123",active:true, refreshtoken:"abc"
    }),
    new User({
        id:2, 
        name:"Eduardo", 
        lastname:"Fajardo", 
        email:"efajardo@gmail.com", 
        password:"123",
        active:true, 
        refreshtoken:"abc"
    })
]

export default class UserInfraestructure implements UserRepository {
    list(): User[] {
        return users;
    }
    listOne(id: number): User {
        return Object.assign({},users.find((el:User) => el.properties().id === id ));
    }
    insert(user: User): void {
        console.log("User inserted: ", user);
    }
    update(user: User): void {
        console.log("User update: ", user);
    }
    delete(user: User): void {
        user.delete();
    }

}