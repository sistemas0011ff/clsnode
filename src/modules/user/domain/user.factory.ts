import { v4 as uuidv4 } from 'uuid';
import User, { UserProperties } from './user';

export default class UserFactory {
    create(
        name: string,
        lastname: string,
        email: string,
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