import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StencilComponent } from './stencil/stencil.component';
import { SingleSpaComponent } from './single-spa/single-spa.component';
import { ReactComponent } from './react/react.component';
import { VueComponent } from './vue-info/vue.component';
import { AngularInfoComponent } from './angular-info/angular-info.component';
import { RootAppInfo } from './root-app/root-app-info.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateConfigService } from './services/translate-config.service';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { ServerExpressComponent } from './server-express/server-express.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'http://localhost:3000/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    StencilComponent,
    SingleSpaComponent,
    ReactComponent,
    VueComponent,
    AngularInfoComponent,
    RootAppInfo,
    ServerExpressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'es',
    }),
  ],
  providers: [TranslateConfigService,   {
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
      }
    }
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
