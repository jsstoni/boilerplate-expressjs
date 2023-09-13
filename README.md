# Nodejs https://nodejs.org/es

Cada archivo en la carpeta `/src/routes` es considerado como un router

el archivo web.js es la base de todas la rutas principales que desees agregar

si deseas agregar una nueva ruta `http://localhost/blog` solo debes crear un archivo en la carpeta de las rutas `blog.js`

#### Exemplo de ruta base.js

```javascript
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Blog page");
});

export default router;
```