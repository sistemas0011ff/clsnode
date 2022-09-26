console.log("test");

import { AppDataSource } from "./data-source";

AppDataSource.initialize()
.then(()=> {

})
.catch( console.log );