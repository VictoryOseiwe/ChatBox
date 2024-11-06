import { Sequelize } from "sequelize";
import pg from "pg";
import env from "dotenv";

env.config();
console.log(process.env.DB_PASS);
export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false,
    //   },
    // },
    dialectModule: pg,
  }
);
