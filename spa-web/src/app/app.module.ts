import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HighlightModule } from 'ngx-highlightjs';
import { AppComponent } from './app.component';
import { StencilComponent } from './stencil/stencil.component';
import { SingleSpaComponent } from './single-spa/single-spa.component';
import { ReactComponent } from './react/react.component';
import { VueComponent } from './vue-info/vue.component';
import { AngularInfoComponent } from './angular-info/angular-info.component';

@NgModule({
  declarations: [
    AppComponent,
    StencilComponent,
    SingleSpaComponent,
    ReactComponent,
    VueComponent,
    AngularInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
