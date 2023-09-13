import fs from "fs";
import express from "express";
import web from "./web.js";

const router = express.Router();
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

export default router;
