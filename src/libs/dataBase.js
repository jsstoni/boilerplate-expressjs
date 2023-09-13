import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  database: "projects",
  username: "root",
  password: "",
});

export default sequelize;
