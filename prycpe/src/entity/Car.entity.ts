import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

@Entity()
export class Car{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand: string;

    @Column()
    model: string

    @Column()
    year: number

    @Column()
    color: string

    @OneToOne((type) => User, user => user.car)
    @JoinColumn()
    user: User;    

}