import { Component } from '@angular/core';
import { TranslateConfigService } from './services/translate-config.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private translateConfigService: TranslateConfigService) {}

  theme_mode(){
    const theme = localStorage.getItem("theme")
    const style = document.getElementById('theme-colors');
    if (theme === "light"){
      style?.setAttribute('href', 'http://localhost:3000/css/colors/variables-general-colors.css');

    }else{
      style?.setAttribute('href', 'http://localhost:3000/css/colors/variables-dark-colors.css');
    }
  }

  ngOnInit(): void {
    this.theme_mode()
    this.translateConfigService.changeLanguage(localStorage.getItem("languaje") || 'es')
  }

  
}
