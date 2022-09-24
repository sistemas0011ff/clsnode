export abstract class ValueObject<Props> {
    protected readonly props : Props;

    constructor(props: Props){
        this.props = Object.freeze(props);
    }

    static create(valor: string){
        
    }    

    // get Value() :  string{
    //     return "";
    // }

}