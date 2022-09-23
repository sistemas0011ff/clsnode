import { UserProperties } from "src/modules/user/domain/user";
import { EmailVO } from "src/modules/user/domain/value-objects/email.vo";
import { DTO, IDTO } from "./dto.interfacec";

//Example :  Interface DTO
export interface UserOneDTO{
    name: string,
    lastname: string,
    email: String,
    guid: string,
};

export type UserListOneDTO = UserOneDTO;


//Ejemplo extendiendo de la clase abtract

export class UserListOneMapping extends DTO<UserProperties,UserOneDTO> {
    execute(data: UserProperties) : UserListOneDTO {        
            return {
                name :  data.name,
                lastname : data.lastname,
                email: data.email.value,
                guid : data.guid
            }        
    }
}


//Ejemplo implementando la interface
// export class UserListOneMapping implements IDTO<UserProperties,UserOneDTO> {
//     execute(data: UserProperties) : UserListOneDTO {        
//             return {
//                 name :  data.name,
//                 lastname : data.lastname,
//                 email: data.email.value,
//                 guid : data.guid
//             }        
//     }
// }