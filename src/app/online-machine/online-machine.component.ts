import { Component } from '@angular/core';

@Component({
  selector: 'app-online-machine',
  templateUrl: './online-machine.component.html',
  styleUrls: ['./online-machine.component.css']
})
export class OnlineMachineComponent {
  MachineDataArray = [
    { title: 'M1', Production: '100', status:'1',stoppage:'1' },
    { title: 'M2', Production: '200' },
    { title: 'M3', Production: '1500' },
    { title: 'M1', Production: '31022' },
    { title: 'M2', Production: '200' },
    { title: 'M3', Production: '1500' },
    { title: 'M1', Production: '31022' },
    { title: 'M2', Production: '200' },
    { title: 'M3', Production: '1500' },
    { title: 'M1', Production: '31022' },
    { title: 'M2', Production: '200' },
    { title: 'M3', Production: '1500' },
  ]
  getColumns(): string[] {
  
    return Object.keys(this.MachineDataArray[0]);
  }  
  dropdownItems: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  selectedOption ?  : string;
}
