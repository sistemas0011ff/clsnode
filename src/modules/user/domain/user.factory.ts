import { v4 as uuidv4 } from 'uuid';
import User, { UserProperties } from './user';
import { EmailVO } from './value-objects/email.vo';

export default class UserFactory {

//Acá pueden

    create(
        name: string,
        lastname: string,
        // email: string,
        email :  EmailVO,
        password: string
    ){
        const userPropierties : UserProperties = {
            name,
            lastname,
            email,
            password,
            guid: uuidv4(),
            refreshtoken : uuidv4(),
        }

        const user = new User(userPropierties);

        return user;
    }


}