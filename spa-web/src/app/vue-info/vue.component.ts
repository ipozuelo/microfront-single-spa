import { Component } from '@angular/core';

@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['../app.component.scss']
})
export class VueComponent {

  code_create_vue_microfrontend ='$ create-single-spa --framework vue'
  code_config_webpack = `   configureWebpack:{
    output:{
      libraryTarget:"system",
      filename:"js/app.js"
    },
  },`

  code_ejecute_vue_app = `$ npm run serve:standalone`

}
