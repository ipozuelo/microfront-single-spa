
# test 1

# test 3




# test 2

# Single-SPA Microfrontends
Esto es una aplicación basada en Microfrontends donde se utiliza el framework Single-SPA contando con varios microfrontends desarrollados en Angular, React y Vue. 

Aparte, se utiliza un sistema de traducción para cada microfrontend y web components desarrollados en Stencil js.

## Ejecutar App Microfrontends

Para poder ejecutar esté proyecto, lo primero que hay que hacer es clonar el repositorio en tu ordenador.

```bash
 https://github.com/ipozuelo/microfront-single-spa.git
```

Una vez tengamos el proyecto, lo que deberíamos hacer es ir a cada carpeta de cada microfrontend e instalar la carpeta node_modules. Para ello, se ejecuta:

```bash
 npm i
```


Después, tan solo hay que ejecutar cada microfrontend con sus respectivos comandos.

### [spa-root](./spa-root)
Aplicación principal donde envuelve el resto de microfrontend

```bash
cd spa-root
npm i
npm start
```
### [server-express](./server-express)
Servidor que se encarga de gestionar los archivos de variables css, imágenes y json de traducción al resto de aplicaciones microfrontend. Aparte también contiene el "build.js" para que cada vez que se ejecute genere los cambios de las variables de figma tokens.

```bash
cd server-express
npm i
npm start
```
### [spa-nav](./spa-nav)
Microfrontend de React encargado de desarrollar el nav-bar de la aplicación.

```bash
cd spa-nav
npm i
npm run start:standalone
```

### [spa-home](./spa-home)
Microfrontend de Angular encargado de desarrollar la pantalla principal de la aplicación.

```bash
cd spa-home
npm i
npm run serve:single-spa:spa-home
```

### [spa-web](./spa-web)
Microfrontend de Angular encargado de desarrollar la pantalla donde se explica cómo está montada la web.

```bash
cd spa-web
npm i
npm run serve:single-spa:spa-web
```

### [spa-library](./spa-library)
Microfrontend de Angular encargado de desarrollar la pantalla donde se encuentran las librerías utilizadas en la aplicación.

```bash
cd spa-library
npm i
npm run serve:single-spa:spa-library
```


### [spa-tools](./spa-tools)
Microfrontend de Angular encargado de desarrollar la pantalla donde se encuentran las herramientas que se utilizan en la aplicación.

```bash
cd spa-tools
npm i
npm run serve:single-spa:spa-tools
```

### [spa-about](./spa-about)
Microfrontend de Vue encargado de desarrollar la pantalla donde se encuentra la información de contacto.

```bash
cd spa-about
npm i
npm run serve:standalone
```

### [spa-team](./spa-team)
Microfrontend de React encargado de desarrollar la pantalla donde se encuentra la información sobre cosas útiles para el equipo de Front.

```bash
cd spa-team
npm i
npm run start:standalone
```

## [stencil-library](./stencil-library)
Proyecto encargado de desarrollar los web components utilizados en la aplicación principal. 

```bash
cd stencil-library 
npm i 
npm start
```



