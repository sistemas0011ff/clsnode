//En este punto realizaremos la inyección de la dependencia
// a la aplicación o CORE

import User from "../domain/user";
import { UserRepository } from "../domain/user.repository";

export default class UserApplication {
    constructor(private readonly userRepository: UserRepository) {}

    //Ahora en el core.. podemos crear nuestros propios métodos
    //no tiene que llamarse necesariamente igual a lo del repository

    list() {
        return this.userRepository.list();
    }

    listOne(id: number) {
        return this.userRepository.listOne(id);
    }

    insert(user: User) {
        return this.userRepository.insert(user);
    }

    update(user: User) {
        return this.userRepository.update(user);
    }

    delete(user: User) {
        return this.userRepository.delete(user);
    } 
}