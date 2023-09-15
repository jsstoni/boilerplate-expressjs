import http from "http";
import app from "../src/app.js";
import config from "../config/index.js";
import sequelize from "../src/libs/dataBase.js";

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Start DB");
    await sequelize.sync();
    const port = config.port;
    app.set("port", port);

    const server = http.createServer(app);
    server.listen(port, () => console.log(`Server started on port: ${port}`));
    server.on("error", (err) => {
      console.log(err);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
