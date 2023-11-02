import { Component } from '@angular/core';

@Component({
  selector: 'app-translate-angular',
  templateUrl: './translate-angular.component.html',
  styleUrls: ['./translate-angular.component.scss','../app.component.scss']
})
export class TranslateAngularComponent {

  install_library_ngx_translate_core_angular = `$ npm install @ngx-translate/core@14.0.0
$ npm install @ngx-translate/http-loader@7.0.0`

  code_createTranslateLoader = `export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, 'http://localhost:3000/i18n/', '.json');
  }`

  code_translateModule = `TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient],
    },
    defaultLanguage: 'es'
  }),`


}
