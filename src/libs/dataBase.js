const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  database: "projects",
  username: "root",
  password: "",
});

module.exports = sequelize;
