const fs = require("fs");
const express = require("express");
const router = express.Router();
const web = require("./web.js");

router.use(web); //global path

const pathRouter = __dirname;

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithOutExt = removeExtension(file);
  const skip = ["index", "web"].includes(fileWithOutExt);
  if (!skip) {
    router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`));
  }
});

module.exports = router;
