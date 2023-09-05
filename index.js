const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const {
  logErrors,
  wrapErrors,
  errorHandle,
} = require("./src/utils/middlewares/errorMiddleware");
const config = require("./config");
const port = config.port;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

//middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandle);

app.listen(port, () => console.log(`Server started on port ${port}`));
