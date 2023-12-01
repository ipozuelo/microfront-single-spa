
# Spa-Vue
Para crear un microfrontend con el framework de Vue (Vue 2), hay que ejecutar el siguiente comando:


```bash
create-single-spa --framework vue
```

Luego, para que podamos visualizar el microfrontend, hay que añadir en el archivo vue.config.js la configuración de WebPack. 

```bash
   configureWebpack:{
    output:{
      libraryTarget:"system",
      filename:"js/app.js"
    },
  },
```

Por último, ya podremos ejecutar nuestro microfrontend sin problemas con el siguiente comando:

```bash
npm run serve:standalone
```
