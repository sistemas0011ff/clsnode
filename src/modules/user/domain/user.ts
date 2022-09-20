//Separando propiedades obligaatorias y 
// las no requeridas, en interfaces
// para luego poder unirlas

import { IEntity } from "src/modules/shared/interface/entity.interface";


interface UserRequired {
    id: number;
    name: string;
    lastname: string;
    email: string;
    password: string;
}

interface UserOptional {
    refreshtoken: string;
    active: boolean;
} 

//Siguiendo el concepto de cleancode, cuando se tiene mas de 4 parámetros se requiere crear una interface

//dIFERENCIA entre type e interface--- es muy poca la dreferencia
//con los tipos no se puede concatenar conjuto de tipos de datos
//con las interfaces si se puede hacer.. teniendo dos interfacecs por separadas con el mismo nombre... luego se unen
type UserUpdate = {
    name: string; 
    lastname: string; 
    password: string; 
    refreshToken: string;
    active: boolean;
}



//Creando un tipo de propiedad para poder condicionar 
// las propiedades que serán obligatoRios
export type UserProperties = Required<UserRequired>  & Partial<UserOptional>

//Se comentó la clase sin immplementar INTERFACE
// export default class User  {
//Se agregá clase que implementa la INTERFACE    
export default class User  implements IEntity<UserProperties,UserUpdate> {
    private readonly id: number;
    private name:string;
    private lastname:string;
    private readonly email:string;
    private password:string;
    private refreshToken:string;
    private active:boolean | null;
    
    //Constructo asigna las propiedades
    constructor(userProperties: UserProperties)
    {
        Object.assign(this, userProperties)
    }   

    // update(name: string, lastname: string, password: string, refreshToken: string,active: boolean) {
    //     this.name = name
    // }
    update(fields: UserUpdate) {
        Object.assign(this,fields)
    }

    delete(){
        this.active = false;
    }
    /*
    constructor(
        name:string, 
        lastname:string, 
        email:string,
        password: string, 
        refreshToken:string,
        active: boolean
        ){
            this.name = name;
            this.lastname = lastname;
            this.email = email;
            this.password = password;
            this.refreshToken = refreshToken;
            this.active = active;            
        }

    */        
    // Forma 1 de get. es para cada propiedad    
    // get propertyName(): string {
    //     return this.name;
    // }
    

    // Forma 2 de get. es un properties que devuelve todo los obejetos seteados
    //acá se define un método de tipo GET que hace que el 
    //método se comporte como una propiedad
    // get propereties () {
    //En este caso se retira el get, para poder trabajar con la interface
    // properties(){
    properties() : UserProperties {   
        return {
            id: this.id,
            name : this.name,
            lastname : this.lastname,
            email : this.email,
            password : this.password,
            refreshtoken : this.refreshToken,
            active : this.active,
        }
    }    


}