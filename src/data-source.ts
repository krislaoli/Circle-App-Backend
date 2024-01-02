import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "kris13",
  database: "Circle App",
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migration/*.ts"],
  subscribers: [],
  // ssl: true,

});
  // host: "ep-lingering-bonus-71103436.ap-southeast-1.aws.neon.tech",
  // port: 5432,
  // username: "arya.skoba",
  // password: "7cqTgyOX2Udj",
  // database: "circle",
  // synchronize: true,
  // logging: false,
  // entities: ["src/entities/*.ts"],
  // migrations: ["src/migration/*.ts"],
  // subscribers: [],
  // ssl: true,