
import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car.entity";
import { User } from "./entity/User.entity";

AppDataSource.initialize()
.then( async (conn)=> {
     

    //Forma 2: Insertar modo cascada
    const userRepository = conn.getRepository(User);
    // const carRepository = conn.getRepository(Car);

    const car = new Car();
    car.brand = "Frond";
    car.model = "Mustang";
    car.year = 1332;
    car.color = "black";
    
    // await carRepository.save(car);
 

    const user = new User();
    user.name = "Eduardo";
    user.lastname = "Fajardo";
    user.age = 99;
    user.email = "efajardo@gmai.com";
    user.car = car;
    const userInserted = await userRepository.save(user);
    console.log("userInserted: ", userInserted);

    // const user2 = new User();
    // user2.name = "XXXXXXX";
    // user2.lastname = "Fajardo";
    // user2.age = 99;
    // user2.email = "efajardo@gmai.com";
    // user2.car = car;
    // const userInserted2 = await userRepository.save(user2);
    // console.log("userInserted: ", userInserted2);

    /* //Forma uno donde se evidencia de 1 a 1
    const userRepository = conn.getRepository(User);
    const carRepository = conn.getRepository(Car);

    const car = new Car();
    car.brand = "Frond";
    car.model = "Mustang";
    car.year = 1332;
    car.color = "black";
    
    await carRepository.save(car);
 

    const user = new User();
    user.name = "Eduardo";
    user.lastname = "Fajardo";
    user.age = 99;
    user.email = "efajardo@gmai.com";
    user.car = car;
    const userInserted = await userRepository.save(user);
    console.log("userInserted: ", userInserted);
    const user2 = new User();
    user2.name = "XXXXXXX";
    user2.lastname = "Fajardo";
    user2.age = 99;
    user2.email = "efajardo@gmai.com";
    user2.car = car;
    const userInserted2 = await userRepository.save(user2);
    console.log("userInserted: ", userInserted2);

    */

})
.catch( console.log );