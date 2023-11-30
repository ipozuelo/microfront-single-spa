
# Single-SPA Microfrontends
Esto es una aplicación basada en Microfrontends donde se utiliza el framework Single-SPA contando con varios microfrontends desarrollados en Angular, React y Vue. 

Aparte, se utiliza un sistema de traducción para cada microfrontend y web components desarrollados en Stencil js.


## Crear aplicación root

Para empezar a utilizar Single-SPA, hay que instalar el framework de manera globlal para utilizar sus comandos que nos facilitarán generar aplicaciones microfrontend. 

```bash
  npm install --global create-single-spa
```

Una vez tengamos esto, hay que generar una aplicación que envuelva el resto de aplicaciones (microfrntends). Por ello utilizamos el siguiente comando:

```bash
  create-single-spa
  cd spa-root
```
    