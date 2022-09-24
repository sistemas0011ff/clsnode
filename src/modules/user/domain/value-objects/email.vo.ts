import { ValueObject } from "./vo.class";

interface EmailProps {
    value: String;
}

export class EmailVO extends ValueObject<EmailProps> {
    //Se elimina por que lo inicializa la calse abstracta
    // private readonly props : EmailProps;

    private constructor(props: EmailProps){
        //En lugar de hacer esta linea
        //llamamos al contructor de la clase.. que ya lo hace
        //this.props = props;
        super(props);
    }

    static create (email: String) {
        if (!email.match("efajardo@gmail.com")){
            throw new Error("It's not email");            
        }
        //Asignando valor email al props... mediante el contructor
        return new EmailVO({value: email});
    }    

    get value() : String {
        return this.props.value;
    }
 }
