import app from "./app.js";
import config from "./config/index.js";
import sequelize from "./src/libs/dataBase.js";

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
