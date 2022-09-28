
import { AppDataSource } from "./data-source";
import { Medic } from "./entity/Medic.entity";

AppDataSource.initialize()
.then( async ()=> {
   
    const medic = await AppDataSource.manager
    .createQueryBuilder()
    .from(Medic, "medico")
    .where("medico.age between :age1 and :age2",{age1: 0, age2:19})
    // .getMany();
    .getRawMany();
    console.log( JSON.stringify(medic ,null,"\t"));

})
.catch( console.log );