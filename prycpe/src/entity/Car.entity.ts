import { type } from "os";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    // @OneToMany((type) => User, user => user.car)
    // @JoinColumn()
    // @ManyToOne(type => User, user => user.cars)
    //Join table se usa para tabla dominante en muchos a muchos
    @ManyToMany(type => User, user => user.cars)
    @JoinTable()
    users: User[];    

}