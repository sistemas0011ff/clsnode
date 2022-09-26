import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User.entity"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3307,
    username: "devus",
    password: "12345",
    database: "dbdomusr",
    synchronize: true,
    logging: true,
    entities: ["src/entity/**/*.entity.ts"],
    migrations: [],
    subscribers: [],
})
