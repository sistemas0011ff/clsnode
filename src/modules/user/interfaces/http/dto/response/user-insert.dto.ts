import { UserProperties } from "src/modules/user/domain/user";
import { IDTO } from "./dto.interfacec";

interface UserDTO {
    name : string,
    lastname : string,
    email : String,
    guid :  string
}

export type UserInsertDTO = UserDTO;

export class UserInsertMapping implements IDTO<UserProperties,UserInsertDTO>  {
    execute(data: UserProperties) :  UserInsertDTO {
        return {
            name: data.name,
            lastname: data.lastname,
            email: data.email.value,
            guid: data.guid
        }
    }
}