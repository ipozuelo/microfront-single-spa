import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from './services/translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  
  constructor(private translateConfigService: TranslateConfigService) {}

  getTranslatedText(): string {
    this.translateConfigService.loadTranslations("es")
    return this.translateConfigService.getTranslation('home.tittle');
  }

  ngOnInit(): void {
    this.translateConfigService.changeLanguage(localStorage.getItem("languaje") || 'es')
  }
}


