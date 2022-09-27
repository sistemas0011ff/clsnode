
import { AppDataSource } from "./data-source";
import { Car } from "./entity/Car.entity";
import { User } from "./entity/User.entity";

AppDataSource.initialize()
.then( async (conn)=> {
    const userRepository = conn.getRepository(Car);

    //Adding a new CAR
    const carEntity = new Car();
    carEntity.brand = "Marca-Ford";
    carEntity.model = "Musstang";
    carEntity.year = "2011";
    carEntity.color = "Black";

    //Forma una de insert
    // const carSaved = await userRepository.save(carEntity);
    // console.log("carSaved: ", carSaved);

    //Forma 2 de insert
    const cardSaved2 = await AppDataSource.manager.save(carEntity);
    console.log("cardSaved2: ", cardSaved2);



})
.catch( console.log );