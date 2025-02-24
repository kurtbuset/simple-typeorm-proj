import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Student } from "./entity/Student"

export const AppDataSource = new DataSource({
    type: "mysql",
    driver: require("mysql2"),
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "db-typeorm",
    synchronize: true,
    logging: false,
    entities: [Student],
    migrations: [],
    subscribers: [],
})


AppDataSource.initialize()
