import { UserProperties } from "src/modules/user/domain/user";
import { DTO } from "./dto.interfacec";


//Example :  Interface DTO
export interface UserDTO{
    name: string,
    lastname: string,
    guid: string,
    password: string
};


// const mapping = (data: User[]) : UserListDTO[]  => {
//     return data.map((user: User)=>{
//         return {
//             name : user.properties().name,
//             lastname :  user.properties().lastname,
//             guid: user.properties().guid
//         }    ;
//     });
// };

export type UserListDTO  = UserDTO[];
type UserPropertiesVal = UserProperties[];
//Example : Class DTO
export class UserListMapping  extends DTO<UserPropertiesVal,UserListDTO> {
    execute (data: UserPropertiesVal) :  UserListDTO  {
        return data.map((user: UserProperties)=>{
            return {
                name : user.name,
                lastname :  user.lastname,
                guid: user.guid,
                password: user.password
            }    ;
        });
    };
    
};

