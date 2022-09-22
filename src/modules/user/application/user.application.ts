//En este punto realizaremos la inyección de la dependencia
// a la aplicación o CORE

import User, { UserProperties } from "../domain/user";
import { UserRepository } from "../domain/user.repository";

export default class UserApplication {
    constructor(private readonly userRepository: UserRepository) {}

    //Ahora en el core.. podemos crear nuestros propios métodos
    //no tiene que llamarse necesariamente igual a lo del repository

    list() {
        return this.userRepository.list();
    }

    listOne(guid: string) {
        return this.userRepository.listOne(guid);
    }

    insert(user: User) {
        return this.userRepository.insert(user);
    }
    // update(user: User) : User o Void{
    // update(user: User) {
    update(user: User) : UserProperties{
        return this.userRepository.update(user) 
    }

    delete(user: User) {
        return this.userRepository.delete(user);
    } 
}