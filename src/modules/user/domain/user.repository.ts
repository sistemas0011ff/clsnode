//Con esto se genera la inversión de la dependencia,
//ya que la entidad va depender de esta interfase, vemos que se ha abstraido

//Estos repositorios, son los llamdos puertos en
//la AQ hexagonal y sirven de muros
//Son por donde los adaptadores se comunican 
//con el core o mal llamando aplicación

import User from "./user";


//Definiendo repositorio
export interface UserRepository{
    list(): User[];
    listOne(guid: string) : User;
    insert(user: User) : void;
    update(user: User) : void;    
    delete(user: User) : void;
}