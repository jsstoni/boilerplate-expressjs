import express from "express";
import web from "../src/routes/web.js";
import { glob } from "glob";

const router = express.Router();
router.use(web);

const routes = await glob("../src/routes/*.js", {
  ignore: ["**/index.js", "**/web.js"],
});

for (const file of routes) {
  const routeName = file.replace(/^.*[\\\/]/, "");
  import(`./${routeName}`)
    .then((routeModule) => {
      router.use(`/${routeName.replace(".js", "")}`, routeModule.default);
    })
    .catch((err) => {
      throw `Error load module: ${routeName}`;
    });
}

export default router;
