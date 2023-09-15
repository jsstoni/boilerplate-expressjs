import path from "path";
import cors from "cors";
import helmet from "helmet";
import express from "express";
import compression from "compression";
import routes from "./routes/index.js";
import {
  logErrors,
  wrapErrors,
  errorHandle,
} from "./utils/middlewares/errorMiddleware.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.set("views", path.join('src/views'));
app.set("view engine", "ejs");

app.use(routes);

//middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandle);

export default app;
