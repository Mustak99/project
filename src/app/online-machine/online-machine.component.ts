import { Component } from '@angular/core';

@Component({
  selector: 'app-online-machine',
  templateUrl: './online-machine.component.html',
  styleUrls: ['./online-machine.component.css']
})
export class OnlineMachineComponent {
  MachineDataArray = [
    { title: 'M1', Loom: '100',  status:'1',stoppage:'0' },
    { title: 'M2', Loom: '200' , status:'1',stoppage:'0' },
    { title: 'M3', Loom: '1500',  status:'1',stoppage:'0'},
    { title: 'M1', Loom: '31022',  status:'1',stoppage:'0' },
    { title: 'M2', Loom: '200',  status:'1',stoppage:'0' },
    { title: 'M3', Loom: '1500',  status:'1',stoppage:'0' },
    { title: 'M1', Loom: '31022',  status:'1',stoppage:'0' },
    { title: 'M2', Loom: '200',  status:'1',stoppage:'0' },
    { title: 'M3', Loom: '1500',  status:'1',stoppage:'0' },
    { title: 'M1', Loom: '31022',  status:'1',stoppage:'0' },
    { title: 'M2', Loom: '200',  status:'1',stoppage:'0' },
    { title: 'M3', Loom: '1500',  status:'1',stoppage:'0' },
  ]
  
  getColumns(): string[] {
  
    return Object.keys(this.MachineDataArray[0]);
  }  
  isExpanded = false;
  isHide=false;
  divVisibility: boolean[] = [true, false, false, false, false];
  toggleSize() {
    this.isExpanded = !this.isExpanded;
  }
  toggleStyle() {
    this.isHide = !this.isHide;
  }
  toggleDiv(index: number): void {
    this.divVisibility[index] = !this.divVisibility[index];
  }
  
}
