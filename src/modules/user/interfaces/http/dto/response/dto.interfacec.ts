export interface IDTO <Properties, DTO> {
    execute(data: Properties ) :  DTO;
}

export abstract class DTO <Properties, DTO>  {

    //Acá le indicamos que va tener que agregar el objeto que implemente esta clase
    abstract execute(data: Properties) : DTO

}