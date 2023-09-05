const cors = require("cors");
const helmet = require("helmet");
const express = require("express");
const config = require("./config");
const port = config.port;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

app.listen(port, () => console.log(`Server started on port ${port}`));