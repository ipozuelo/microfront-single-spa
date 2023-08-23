import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-info',
  templateUrl: './angular-info.component.html',
  styleUrls: ['../app.component.scss'],
})
export class AngularInfoComponent {
  
  ruta_img = '../../assets/main.single-spa.png'
  code_create_angular_microfrontend = '$ create-single-spa --framework angular';
}
