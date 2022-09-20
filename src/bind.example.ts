/*

//En este punto se muestra el error de que no se puede leer la propiedad que es indefinida

class Alert{
    message(msg: string){
        console.log(msg)
    }
}

class UserApplication {
    alert = new Alert();

    constructor(){
        //this.alert.message("Hello World");
    }

    insert(){
        this.alert.message("Hello World  - Edu");
    }
}

class Myframework {
    execute(fnt : ()=> void) {
        fnt();
    }
}

const userApplicatio = new UserApplication();
userApplicatio.insert();

const myfrmw = new Myframework();
myfrmw.execute(userApplicatio.insert)

*/


 
//En este punto se hace un bind, LA CUAL permite que cuando ejecutas la función de forma dinámica
//esta función este haciendo referncia al contexto

class Alert{
    message(msg: string){
        console.log(msg)
    }
}

class UserApplication {
    alert = new Alert();

    constructor(){
        //this.alert.message("Hello World");
        this.insert = this.insert.bind(this);
    }

    insert(){
        this.alert.message("Hello World  - Edu");
    }
}

class Myframework {
    execute(fnt : ()=> void) {
        fnt();
    }
}

const userApplicatio = new UserApplication();
userApplicatio.insert();

const myfrmw = new Myframework();
myfrmw.execute(userApplicatio.insert)
 
