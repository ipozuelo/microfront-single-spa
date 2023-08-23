import { Component } from '@angular/core';
import {
  HighlightLoader,
} from 'ngx-highlightjs';

@Component({
  selector: 'app-single-spa',
  templateUrl: './single-spa.component.html',
  styleUrls: ['../app.component.scss']
})
export class SingleSpaComponent {

  constructor(private highlightLoader: HighlightLoader){}

  code_installl_single_spa = '$ npm install --global create-single-spa'
  code_create_single_spa = '$ create-single-spa'
  
}
