import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class TranslateConfigService {
  private translations: { [key: string]: string } = {};

  constructor(
    private translateService: TranslateService,
    private http: HttpClient
  ) {
    translateService.setDefaultLang('es');
    this.translateService.use('es');
    
    // Cargar las traducciones iniciales al inicio del servicio
    this.loadTranslations('es');
  }

  changeLanguage(type: string) {
    this.translateService.use(type);
    this.loadTranslations(type);
  }

   loadTranslations(language: string) {
    const jsonFileName = `${language}.json`;

    this.http.get<{ [key: string]: string }>('assets/i18n/' + jsonFileName).subscribe(
      (translations) => {
        this.translations = translations;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getTranslation(key: string): string {
    return this.translations[key] || key; // Devolver la traducción o la clave en sí si no se encuentra
  }
}