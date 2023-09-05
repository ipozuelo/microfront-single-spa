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
import { RootAppInfo } from './root-app/root-app-info.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateConfigService } from './services/translate-config.service';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(
    http,
    'http://localhost:9002/assets/i18n/',
    '.json'
  );
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
  providers: [TranslateConfigService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
