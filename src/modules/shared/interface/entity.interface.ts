
//Interface base que servirá para seguir un patron en las impementaciones de las interfaces

export interface IEntity<T,U> {
    properties: ()=> T;
    delete()  : void;
    update(fields: U) :  void;
}


// export interface IEntity<T> {
//     properties: ()=> T;
//     delete()  : void;
//     update(fields: any) :  any;
// }