interface EmailProps {
    value: String;
}

export class EmailVO {
    private readonly props : EmailProps;

    private constructor(props: EmailProps){
        this.props = props;
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
