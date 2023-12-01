
# Spa-Angular
Para crear un microfrontend con el framework de Angular, hay que ejecutar el siguiente comando:

```bash
create-single-spa --framework angular
```

Esto  nos generará un proyecto angular, pero antes de ejecutar, hay que hacer una serie de moficiaciones al proyecto.

Primero hay que modificar el archivo main.single-soa.ts, ya que esté nos estará dando error con la importación de enviroment y con eliminarla valdría. Se tendría que quedar el archivo tal que así: 

```bash
import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';

import { AppModule } from './app/app.module';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<app-root />',
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
```

Después hay que modificar el archivo app-routing.module.ts para añadir el módulo que se genera por defecto de empty-route. El archivo tiene que quedar tal que así:


```bash
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {path:'**', component: EmptyRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue:'/'}]
})
export class AppRoutingModule { }

```

Con esto ya estarían las modificaciones, ahora antes de ejecutar hay que instalar la carpeta node_modules y ya ejecutar. Cabe destacar que el último nombre del comando para ejecutar depende del nombre del pryecto microfrontend.

```bash
npm i
npm run serve:single-spa:spa-web
```
