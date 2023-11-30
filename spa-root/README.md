
# Spa-root
Antes de comenzar a desarrollar una aplicación microfrontend con el framework Single-Spa, hay que instalárselo de manera global.

```bash
npm install --global create-single-spa
```

Ahora ya se puede crear una aplicación root para envolver los microfrontends. Para ello hay que ejecutar el siguiente comando y escoger la configuración necesaria. Con este comando también podremos generar los microfrontend de las otras tecnologías cómo React, Vue, Angular o Svelt.

```bash
create-single-spa
```

Una vez se haya generado la aplicación root, tendremos que gestionar los microfrontend que vamos a añadir. Para ello vamos a crear un archivo importmap.json que contenga las rutas de los microfrontend. 

### Ejemplo 

```bash
{
    "imports": {
      "@single-spa/welcome": "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
      "@spa-root/root-config": "//localhost:8000/spa-root-root-config.js",
      "@spa-nav/react":"http://localhost:8080/spa-nav-spa-nav.js",
      "@spa-home/angular":"http://localhost:9001/main.js"
  }
```

Para enlazar este archivo importmap.json, hay que entrar al archivo index.ejs y editar el importmap que viene por defecto y quedar tal que así:

```bash
 <% if (isLocal) { %>
    <script type="systemjs-importmap" src="/importmap.json"></script> 
    <% } %>
```

Después, la última modificación es entrar al archivo webpack.config.js y añadir un plugin a la configuración para poder enlazar el archivo importmap.json.


```bash
  new CopyWebpackPlugin({
    patterns: [
      {
        from: 'src/importmap'  + '.json',
        to: 'importmap.json',
      },
    ],
  })
```

Por último, ya podemos ejecutar la aplicación root con el siguiente comando:

```bash
npm start
```
