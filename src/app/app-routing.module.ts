import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [
  {path:'', redirectTo:'/dashboard', pathMatch:"full"},
  {path:'', component:NavBarComponent, children:[
    {path:'dashboard', component:DashboardComponent}
  ]},
  {path:'**', redirectTo:'/dashboard'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
