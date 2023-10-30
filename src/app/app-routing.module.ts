import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { OnlineMachineComponent } from './online-machine/online-machine.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path:'',component:DashboardComponent}, 
  {path:'onlineMachine',component:OnlineMachineComponent},
  {path:'dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
