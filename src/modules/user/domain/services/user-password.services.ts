import bcrypt from 'bcryptjs';

export class UserPasswordServices {
    static hash(password: string) : Promise<string> {
        return bcrypt.hash(password,10);
    }
}

// export class UserPasswordServices {
//     static hash(password: string) : string {
//         return bcrypt.hash(password,10);
//     }
// }