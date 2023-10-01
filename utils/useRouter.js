import express from "express";
import { glob } from "glob";
import web from "../src/routes/web.js";

const router = express.Router();

const routes = await glob("./src/routes/*.js", {
  ignore: ["**/index.js", "**/web.js"],
});

for (const file of routes) {
  const routeFile = file.replace(/^.*[\\\/]/, "");
  const routeName = routeFile.replace(".js", "");
  try {
    const { default: routeModule } = await import(`../src/routes/${routeFile}`);
    router.use(`/${routeName}`, routeModule);
  } catch (error) {
    throw `Route no load ${routeFile}`;
  }
}
router.use("/", web);

export default router;
