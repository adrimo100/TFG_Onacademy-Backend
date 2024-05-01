import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });

const sequelizeInstance = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  },
);

export default sequelizeInstance;
