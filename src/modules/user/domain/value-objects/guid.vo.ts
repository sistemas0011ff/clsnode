import { validate as uuidValidate } from 'uuid';
import { ValueObject } from "./vo.class";

interface GuidProps {
    value: string;
}

export class GuidVO extends ValueObject<GuidProps> {
    //Se elimina por que lo inicializa la clase abtracta
    // private readonly props : GuidProps;

    
    private constructor(props: GuidProps){
        //En lugar de hacer esta linea
        //llamamos al contructor de la clase.. que ya lo hace
        // this.props = props;
        super(props);
    }

    static create (guid: string) {
        if (!uuidValidate(guid)){
            throw new Error("It's not a GUID");            
        }
        //Asignando valor email al props... mediante el contructor
        return new GuidVO({value: guid});
    }    

    get value() : String {
        return this.props.value;
    }
 }
