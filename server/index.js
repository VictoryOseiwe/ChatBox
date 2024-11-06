import express from "express";
import env from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { sequelize } from "./config/db.js";
import { User } from "./models/Users.js";

env.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT;

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully"))
  .catch((err) => console.error("Unable to connect to the database:", err));

sequelize.sync().then(() => {
  console.log("Database connected successfully");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
