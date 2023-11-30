
# Servidor Express
Para desarrollar un servidor express donde poder almacenear los archivos estáticos de la aplicación web hay que crear una carpeta con el nombre del servidor y ejecutar:


```bash
npm init
npm i cors
npm i express
```

Una vez creado el proyecto, hay que crear un archivo index.js con el siguiente código:



```bash
const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.static('public'));


app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
```

Aquí se puede configurar el puerto en el que se abre y la carpeta donde se van a extraer los archivos.

Para ejecutar, hay que modificar el archivo "package.json" y ejecutar el archivo index:


```bash
"scripts": {
"start": "node ./index.js  "
},
```

Por último solo hay que escribir en el terminal:


```bash
npm start
```