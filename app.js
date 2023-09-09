const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const compression = require("compression");
const routes = require("./src/routes");
const {
  logErrors,
  wrapErrors,
  errorHandle,
} = require("./src/utils/middlewares/errorMiddleware");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(routes);

//middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandle);

module.exports = app;