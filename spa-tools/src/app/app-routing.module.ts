import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { GitHubComponent } from './git-hub/git-hub.component';


const routes: Routes = [
  {path:'**', component: GitHubComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: APP_BASE_HREF, useValue:'/'}]
})
export class AppRoutingModule { }
