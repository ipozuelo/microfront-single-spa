import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateReactComponent } from './translate-react/translate-react.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  {path:'**', component: TranslateReactComponent}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue:'/'}]
})
export class AppRoutingModule { }
