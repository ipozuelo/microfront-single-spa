import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootAppInfo } from './root-app/root-app-info.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [{ path: '**', component: RootAppInfo }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppRoutingModule {}
