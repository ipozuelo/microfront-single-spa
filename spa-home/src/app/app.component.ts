import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from './services/translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  
  constructor(private translateConfigService: TranslateConfigService) {}
  traduccion : string = ""

 
  ngOnInit(): void {
    this.translateConfigService.changeLanguage(localStorage.getItem("languaje") || 'es')
    const textToTranslate = 'home.box'; // Texto que deseas traducir
    this.translateConfigService.translte(textToTranslate).subscribe((translation) => {
      this.traduccion = translation;
    });
  }
}