//Domain
class Medic{
    //Formas de inicializar una clase
    constructor(public name?: string, public lastname?: string, public cmp?: number){}

    //1. Se asigna directamente el valor
    /*
    name: string = "name"
    lastname: string = "Apellido"
    cmp: number = 123123
    */
/*
    name?: string
    lastname?: string
    cmp?: number
*/
    //2. La podemos inicializar a travez del constructor
    /*constructor(){
        this.name = "Eduardo"
        this.lastname = "Fajardo"
        this.cmp = 12313
    }*/


    //3. Pasando datos a travez del constructor
    /*
    constructor(name: string, lastname: string, cmp: number){
        this.name = name
        this.lastname = lastname
        this.cmp = cmp
    }*/


    //4. Podemos inicializar desde un métodos INIT
    /*constructor() {
        this.init()
    }

    init(){
        this.name  = "Eduardo"
        this.lastname = "Fajardo"
        this.cmp = 1231
    }*/
}   

//Adaptador
//Infraestructure
class MedicInfraestructure implements MedicRepository {

    //Método insert de la capa de infraestructura
    insert(medic: Medic){
        this.validation(medic);
        this.validationNationality(medic);
        return medic
    }

    //La capa de infraestructura, también puede tener metodos adicionales de validación
    validation(medic: Medic){
        return true;
    }

    validationNationality(medic: Medic){
        return "not need addictional information";
    }

}

//Port
//Ahora vamos a crear un repositorio o puerto 
//Para que no haya un dependencia directa de la capa de aplicacion con la capa de infraestructura
interface MedicRepository{
    insert(medic: Medic): Medic
}

//Applications
//Esta parte es el oraquestador interno, en este caso 
class MedicApplication{

    //Se crea en el constructor un puerto o interfaz para comunicarse con la capa de infraestructura*** Nota

    //v1-Creamo la relación con infraestructura y seteamos a la vez (Solo para node la forma de seteo) - v1
    //constructor(private infraestructure: MedicInfraestructure){}

    //v2-En esta parte lo que va recibir la aplicación es lo enviado por el 
    //   puerto | en este caso es el reportorio que utiliza la entidad de dominio MEDIC
    //Se llama a la interface en el constructor ocn el fin de invertir la dependencia
    constructor(private infraestructure: MedicRepository){}

    insert(medic: Medic){

        //llamamos al método medic insert de infraestructura
        const insertMedic = this.infraestructure.insert(medic);
        return insertMedic;
    }
}



/////////////////////////////////////////////////////////////////////
//1. Test de comuncación Capa de Aplicacion con la capa de instraestructura, 
// a travez del puerto (No es un puerto real solo ejemplo inicial) 
// para comuicación con la capa de infraestructura

//1. Cargamos entidad
const medic:Medic = new Medic("Eduardo", "Fajardo", 12312);


//2. Instanciamos la capa de infraestuctura
//const infraestructure: MedicInfraestructure = new  MedicInfraestructure();
//la línea anterior fue cambiado por que se aplico el 3er principio de SOLID
// que habla de sustitución, la cual puedes usar el padre y tmb  el hijo 
// en este caso usaremos el padre q es la interfas extendida
const infraestructure : MedicRepository = new MedicInfraestructure();
const application: MedicApplication = new MedicApplication(infraestructure);

//3. En este punto visualizacmos como la capa de aplicación
//Interactua con la capa de arquitectura a travez de un puerto
application.insert(medic);






