import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  inputNames: string[] = ["Input 1", "Input 2", "Input 3", "Input 4", "Input 5", "Input 6", "Input 7"];

}
