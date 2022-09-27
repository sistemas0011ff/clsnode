
import { json } from "body-parser";
import { Console } from "console";
import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car.entity";
import { User } from "./entity/User.entity";

AppDataSource.initialize()
.then( async (conn)=> {
   
    const userRepository = conn.getRepository(User);
    const carRepository = conn.getRepository(Car);

    // const users = await userRepository.find();
    const users = await userRepository.find({relations:["cars"]});
    // console.log("Users: ", users);
    console.log("Users: ", JSON.stringify(users,null , "\t"));

    // const users = await userRepository.find();
    // const cars = await carRepository.find({relations:["users"]});
    // console.log("Users: ", users);
    // console.log("Users : ", JSON.stringify(users,null , "\t"));
    

})
.catch( console.log );