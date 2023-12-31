import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslateConfigService {
  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang('es');
    this.translateService.use('es');
  }

  changeLanguage(type: string) {
    this.translateService.use(type);
  }
}
