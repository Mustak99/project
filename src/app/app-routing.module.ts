import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OnlineMachineComponent } from './online-machine/online-machine.component';
const routes: Routes = [
  {path:'',component:DashboardComponent},   
  {path:'onlineMachine',component:OnlineMachineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
