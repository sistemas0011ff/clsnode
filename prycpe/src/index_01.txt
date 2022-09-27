console.log("test");

import { SimpleConsoleLogger } from "typeorm";
import { AppDataSource } from "./data-source";
import { User } from "./entity/User.entity";

AppDataSource.initialize()
.then( async (conn)=> {
    // console.log(conn)
    //Se le puede pasar el nombre de la instanccia
    // const userRepository = conn.getRepository("User");
    //Se le puede pasar el nombre de la instanccia
    const userRepository = conn.getRepository(User);
    const listUsers = await userRepository.find();

    const user = await userRepository.findOne({ where : {id: 1}})


    console.log("find",listUsers);

    console.log("finone",user);


    // Agregando un usuario

    const userEntity = new User();
    userEntity.name = "Juan";
    userEntity.lastname = "Rodriguéz";
    userEntity.email = "efajardo@gmail.com"
    userEntity.age = 3000;

    // const userSave = await userRepository.save(userEntity);
    // console.log("userSave",userSave);

    //Devuelve un registro
    const user3000 = await userRepository.findOne({where : { age : 3000 }});
    console.log("user3000", user3000);

    const user3000a = await userRepository.find({where : { age : 3000 }});
    console.log("user3000a" , user3000a);

    const [ filas, columndata ] =  await userRepository.findAndCount();
    console.log("Fin and count",filas, columndata);


})
.catch( console.log );