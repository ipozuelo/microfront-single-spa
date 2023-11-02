import { Component } from '@angular/core';
import { HighlightLoader } from 'ngx-highlightjs';

@Component({
  selector: 'app-stencil',
  templateUrl: './stencil.component.html',
  styleUrls: ['../app.component.scss'],
})
export class StencilComponent {


  code_npm_stencil_global = '$ npm install -g @stencil/cli';
  code_npm_create_proyect_stencil = `$ npm init stencil  
$ npm i 
$ npm start`;
  code_create_web_component = '$ npm run generate';
  code_stencil_start = '$ npm start';
  code_npm_login = `$ npm login
$ npm publish`;
}
