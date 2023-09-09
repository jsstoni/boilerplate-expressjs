const { DataTypes } = require("sequelize");
const sequelize = require("../libs/dataBase");

const project = sequelize.define("Project", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
});

module.exports = project;
