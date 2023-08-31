import { Component } from '@angular/core';

@Component({
  selector: 'app-online-machine',
  templateUrl: './online-machine.component.html',
  styleUrls: ['./online-machine.component.css']
})
export class OnlineMachineComponent {
  MachineDataArray = [
    { title: 'M1', Machine: '100', status: '1', stoppage: '1',parameter1:"1" },
    { title: 'M2', Machine: '200', status: '1', stoppage: '4',para1:"1" },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
    { title: 'M3', Machine: '1500', status: '1', stoppage: '1' },
    { title: 'M1', Machine: '31022', status: '1', stoppage: '1' },
    { title: 'M2', Machine: '200', status: '1', stoppage: '1' },
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
    { title: 'M3', Machine: '1500', status: '1', stoppage: '0',para3:'3' },
  ]

 

  stoppageCount: number = 0;
  activeCount: number = 0;


  constructor() {
    this.calculateStoppageAndActiveCount();
    this.buttonToDisplay();
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




  buttonToDisplay(): string[] {
    const uniqueKeys = new Set<string>();
    
    for (const machineData of this.MachineDataArray) {
      for (const key of Object.keys(machineData)) {
        if (key !== 'title') {
          uniqueKeys.add(key);

        }
      }
    }
    
    return Array.from(uniqueKeys).sort();
  }
  

  keyVisibility: { [key: string]: boolean } = {};

toggleKeyDisplay(key: string) {
  this.keyVisibility[key] = !this.keyVisibility[key];
}
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }



  
}
