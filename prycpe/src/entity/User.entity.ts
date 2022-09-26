import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class User {

    @PrimaryGeneratedColumn() //Hace que el campo sea PK y Auto Incremental
    id: number

    @Column()
    name: string

    @Column()
    lastname: string

}