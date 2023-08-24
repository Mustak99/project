import { Component } from '@angular/core';

@Component({
  selector: 'app-online-machine',
  templateUrl: './online-machine.component.html',
  styleUrls: ['./online-machine.component.css']
})
export class OnlineMachineComponent {
  MachineDataArray = [
    { title: 'M1', Machine: '100', status: '1', stoppage: '1',parameter1:"1" },
    { title: 'M2', Machine: '200', status: '1', stoppage: '4',para:"1" },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '100', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '100', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '100', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '100', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '100', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '100', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '100', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '100', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '100', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '100', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '0' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '0' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0' },
  ]

  isHide = false;
   adivVisibility ?: boolean[] ;
  togglehide() {
    this.isHide = !this.isHide;
  }
  toggleDiv(index: number): void {
    this.divVisibility[index] = !this.divVisibility[index];
  }

  divVisibility: { [key: string]: boolean } = {};
  toggleableKeys: string[] = [];
  stoppageCount: number = 0;
  activeCount: number = 0;


  constructor() {
    this.calculateStoppageAndActiveCount();
    for (const key of Object.keys(this.MachineDataArray[0])) {
      if (key !== 'title') {
        this.divVisibility[key] = false;
        this.toggleableKeys.push(key);
      }
    }

  }

  calculateStoppageAndActiveCount() {
    for (const machineData of this.MachineDataArray) {
      if (machineData.stoppage === '0') {
        this.stoppageCount++;
      }
      if (machineData.stoppage === '1') {
        this.activeCount++;
      }
    }
  }
}
