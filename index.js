const app = require("./app.js");
const config = require("./config");
const sequelize = require("./src/libs/dataBase.js");
const Project = require("./src/models/Project.js");

const port = config.port;

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Start DB");
    await sequelize.sync();
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}

main();
