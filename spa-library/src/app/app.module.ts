import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateReactComponent } from './translate-react/translate-react.component';
import { TranslateVueComponent } from './translate-vue/translate-vue.component';
import { TranslateAngularComponent } from './translate-angular/translate-angular.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateConfigService } from './services/translate-config.service';
import { StyleDictionaryComponent } from './style-dictionary/style-dictionary.component';
import { LibStorybookComponent } from './lib-storybook/lib-storybook.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'http://localhost:3000/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    TranslateReactComponent,
    TranslateVueComponent,
    TranslateAngularComponent,
    StyleDictionaryComponent,
    LibStorybookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
