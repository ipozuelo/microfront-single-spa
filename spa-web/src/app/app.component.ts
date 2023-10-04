import { Component } from '@angular/core';
import { TranslateConfigService } from './services/translate-config.service';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private translateConfigService: TranslateConfigService) {}


  ngOnInit(): void {
    this.translateConfigService.changeLanguage(localStorage.getItem("languaje") || 'es')
  }

  
}
