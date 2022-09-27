import { type } from "os";
import { Column, Entity, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Car } from "./Car.entity";


@Entity()
export class User {

    @PrimaryGeneratedColumn() //Hace que el campo sea PK y Auto Incremental
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    age: number;

    // @OneToOne((type => Car), car => car.user, { cascade : true })
    // @OneToMany(type => Car, car => car.user , { cascade : true } )
    @ManyToMany(type => Car, car => car.users, { cascade :  true , eager : true} )
    cars: Car[];

}