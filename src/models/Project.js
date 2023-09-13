import { DataTypes } from "sequelize";
import sequelize from "../libs/dataBase";

const project = sequelize.define("Project", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
});

export default project;
