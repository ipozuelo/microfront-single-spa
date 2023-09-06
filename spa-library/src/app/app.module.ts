import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateReactComponent } from './translate-react/translate-react.component';
import { TranslateVueComponent } from './translate-vue/translate-vue.component';
import { TranslateAngularComponent } from './translate-angular/translate-angular.component';
import { TranslateStencilComponent } from './translate-stencil/translate-stencil.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateConfigService } from './services/translate-config.service';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'http://localhost:9004/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TranslateReactComponent,
    TranslateVueComponent,
    TranslateAngularComponent,
    TranslateStencilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
      defaultLanguage: 'es'
    }),
  ],
  providers: [TranslateConfigService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
