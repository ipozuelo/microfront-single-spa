
# Stencil-library
Stencil js es un framework que nos ayuda a desarrollar web components. Para utilizarlo hay que instalárselo de manera global:

```bash
npm install -g @stencil/cli
```

Una vez que se haya instalado, ya podremos crear y ejecutar un proyecto con los siguientes comandos:

```bash
npm init stencil  
npm i 
npm start
```
Para crear nuevos web components se ejecuta:

```bash
npm run generate
```


### Extra

Para publicar los web components desarrollados y poder utilizarlos en otras aplicaciones, se han publicado en NPM con el siguiente comando:

```bash
npm login
npm publish
```

Primero hay que iniciar sesión en NPM y después ir publicando el paquete cambiando la versión del proyecto en package.json

Por último, para enlzarlo a otras aplicaciones, se puede opatr por instalar el paquete generado en NPM o conectarse a través de una CDN

#### Ejemplo

```bash
  <script type="module"  src='https://cdn.jsdelivr.net/npm/stencil-library-web@1.0.0/dist/stencil-library/stencil-library.esm.js'></script>
```



