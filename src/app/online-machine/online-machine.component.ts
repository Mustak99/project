import { Component } from '@angular/core';

@Component({
  selector: 'app-online-machine',
  templateUrl: './online-machine.component.html',
  styleUrls: ['./online-machine.component.css']
})
export class OnlineMachineComponent {
  MachineDataArray =
    [{ "Machine_id": 'M1', "MachineNo": 1, "style": "1498A122:115", "kpicks": 205, "meter": 228.05, "speed": 122, "Air": 27.7, "status": 0 },
    { "Machine_id": 'M2', "MachineNo": 2, "style": "1498A122:115", "kpicks": 239.9, "meter": 278.01, "speed": 258, "Air": 33.0, "status": 0 },
    { "Machine_id": 'M3', "MachineNo": 3, "style": "1498A160:150", "kpicks": 221.74, "meter": 243.41, "speed": 395, "Air": 34.0, "status": 0 },
    { "Machine_id": 'M4', "MachineNo": 4, "style": "1701A305:287", "kpicks": 210.29, "meter": 100.06, "speed": 379, "Air": 38.2, "status": 0 },
    { "Machine_id": 'M5', "MachineNo": 5, "style": "1701A305:287", "kpicks": 220.59, "meter": 212.93, "speed": 489, "Air": 32.6, "status": 1 },
    { "Machine_id": 'M6', "MachineNo": 6, "style": "1498A122:115", "kpicks": 139.56, "meter": 294.03, "speed": 190, "Air": 28.6, "status": 0 },
    { "Machine_id": 'M7', "MachineNo": 7, "style": "1498A122:115", "kpicks": 206.66, "meter": 146.2, "speed": 342, "Air": 39.9, "status": 1 },
    { "Machine_id": 'M8', "MachineNo": 8, "style": "1701A305:287", "kpicks": 197.52, "meter": 125.13, "speed": 523, "Air": 28.7, "status": 1 },
    { "Machine_id": 'M9', "MachineNo": 9, "style": "1498A122:115", "kpicks": 215.94, "meter": 223.99, "speed": 393, "Air": 25.4, "status": 0 },
    { "Machine_id": 'M10', "MachineNo": 10, "style": "1498A122:115", "kpicks": 197.24, "meter": 69.4, "speed": 487, "Air": 36.3, "status": 1 },
    { "Machine_id": 'M11', "MachineNo": 11, "style": "1498A160:150", "kpicks": 273.91, "meter": 187.75, "speed": 543, "Air": 25.0, "status": 1 },
    { "Machine_id": 'M12', "MachineNo": 12, "style": "1498A160:150", "kpicks": 156.99, "meter": 47.91, "speed": 588, "Air": 30.3, "status": 1 },
    { "Machine_id": 'M13', "MachineNo": 13, "style": "1498A122:115", "kpicks": 249.8, "meter": 157.37, "speed": 346, "Air": 37.7, "status": 1 },
    { "Machine_id": 'M14', "MachineNo": 14, "style": "1701A305:287", "kpicks": 171.73, "meter": 231.16, "speed": 402, "Air": 26.4, "status": 1 },
    { "Machine_id": 'M15', "MachineNo": 15, "style": "1498A160:150", "kpicks": 275.07, "meter": 208.72, "speed": 529, "Air": 38.1, "status": 2 },
    { "Machine_id": 'M16', "MachineNo": 16, "style": "1701A305:287", "kpicks": 242.08, "meter": 149.24, "speed": 374, "Air": 38.6, "status": 1 },
    { "Machine_id": 'M17', "MachineNo": 17, "style": "1498A160:150", "kpicks": 232.35, "meter": 286.26, "speed": 518, "Air": 32.3, "status": 1 },
    { "Machine_id": 'M18', "MachineNo": 18, "style": "1498A122:115", "kpicks": 227.13, "meter": 191.15, "speed": 434, "Air": 38.8, "status": 1 },
    { "Machine_id": 'M19', "MachineNo": 19, "style": "1498A122:115", "kpicks": 288.4, "meter": 105.69, "speed": 382, "Air": 36.5, "status": 1 },
    { "Machine_id": 'M20', "MachineNo": 20, "style": "1498A160:150", "kpicks": 130.56, "meter": 104.18, "speed": 480, "Air": 37.2, "status": 1 },
    { "Machine_id": 'M21', "MachineNo": 21, "style": "1498A160:150", "kpicks": 132.17, "meter": 270.37, "speed": 510, "Air": 38.7, "status": 2 },
    { "Machine_id": 'M22', "MachineNo": 22, "style": "1498A122:115", "kpicks": 286.45, "meter": 224.4, "speed": 138, "Air": 30.6, "status": 0 },
    { "Machine_id": 'M23', "MachineNo": 23, "style": "1701A305:287", "kpicks": 148.77, "meter": 277.44, "speed": 357, "Air": 39.4, "status": 2 },
    { "Machine_id": 'M24', "MachineNo": 24, "style": "1498A160:150", "kpicks": 225.12, "meter": 206.07, "speed": 252, "Air": 25.1, "status": 0 },
    { "Machine_id": 'M25', "MachineNo": 25, "style": "1701A305:287", "kpicks": 190.12, "meter": 262.94, "speed": 203, "Air": 32.2, "status": 0 },
    { "Machine_id": 'M26', "MachineNo": 26, "style": "1701A305:287", "kpicks": 116.62, "meter": 265.71, "speed": 434, "Air": 39.0, "status": 2 },
    { "Machine_id": 'M27', "MachineNo": 27, "style": "1498A160:150", "kpicks": 157.43, "meter": 150.23, "speed": 192, "Air": 30.1, "status": 1 },
    { "Machine_id": 'M28', "MachineNo": 28, "style": "1701A305:287", "kpicks": 162.92, "meter": 248.13, "speed": 405, "Air": 34.4, "status": 2 },
    { "Machine_id": 'M29', "MachineNo": 29, "style": "1498A122:115", "kpicks": 162.0, "meter": 24.1, "speed": 476, "Air": 29.7, "status": 1 },
    { "Machine_id": 'M30', "MachineNo": 30, "style": "1498A122:115", "kpicks": 264.01, "meter": 190.2, "speed": 599, "Air": 25.2, "status": 1 },
    { "Machine_id": 'M31', "MachineNo": 31, "style": "1701A305:287", "kpicks": 161.09, "meter": 204.03, "speed": 573, "Air": 28.2, "status": 1 },
    { "Machine_id": 'M32', "MachineNo": 32, "style": "1498A122:115", "kpicks": 113.18, "meter": 141.95, "speed": 106, "Air": 38.9, "status": 0 },
    { "Machine_id": 'M33', "MachineNo": 33, "style": "1701A305:287", "kpicks": 240.35, "meter": 73.73, "speed": 131, "Air": 32.6, "status": 0 },
    { "Machine_id": 'M34', "MachineNo": 34, "style": "1498A122:115", "kpicks": 269.18, "meter": 200.86, "speed": 206, "Air": 37.6, "status": 1 },
    { "Machine_id": 'M35', "MachineNo": 35, "style": "1701A305:287", "kpicks": 246.3, "meter": 30.75, "speed": 361, "Air": 31.2, "status": 0 },
    { "Machine_id": 'M36', "MachineNo": 36, "style": "1498A122:115", "kpicks": 138.57, "meter": 29.14, "speed": 537, "Air": 32.6, "status": 0 },
    { "Machine_id": 'M37', "MachineNo": 37, "style": "1498A122:115", "kpicks": 163.19, "meter": 203.36, "speed": 489, "Air": 28.8, "status": 1 },
    { "Machine_id": 'M38', "MachineNo": 38, "style": "1498A160:150", "kpicks": 182.78, "meter": 210.85, "speed": 535, "Air": 32.7, "status": 0 },
    { "Machine_id": 'M39', "MachineNo": 39, "style": "1701A305:287", "kpicks": 166.92, "meter": 102.03, "speed": 562, "Air": 25.6, "status": 1 },
    { "Machine_id": 'M40', "MachineNo": 40, "style": "1498A160:150", "kpicks": 231.08, "meter": 42.42, "speed": 319, "Air": 35.2, "status": 1 },
    { "Machine_id": 'M41', "MachineNo": 41, "style": "1498A122:115", "kpicks": 255.75, "meter": 190.92, "speed": 101, "Air": 25.7, "status": 1 },
    { "Machine_id": 'M42', "MachineNo": 42, "style": "1701A305:287", "kpicks": 268.57, "meter": 199.84, "speed": 243, "Air": 28.4, "status": 0 },
    { "Machine_id": 'M43', "MachineNo": 43, "style": "1498A160:150", "kpicks": 115.74, "meter": 224.4, "speed": 233, "Air": 28.2, "status": 0 },
    { "Machine_id": 'M44', "MachineNo": 44, "style": "1701A305:287", "kpicks": 251.02, "meter": 34.49, "speed": 337, "Air": 28.3, "status": 0 },
    { "Machine_id": 'M45', "MachineNo": 45, "style": "1498A122:115", "kpicks": 241.2, "meter": 246.72, "speed": 334, "Air": 35.6, "status": 0 },
    { "Machine_id": 'M46', "MachineNo": 46, "style": "1701A305:287", "kpicks": 205.33, "meter": 83.27, "speed": 320, "Air": 33.3, "status": 0 },
    { "Machine_id": 'M47', "MachineNo": 47, "style": "1498A122:115", "kpicks": 133.75, "meter": 102.3, "speed": 441, "Air": 33.5, "status": 0 },
    { "Machine_id": 'M48', "MachineNo": 48, "style": "1701A305:287", "kpicks": 280.6, "meter": 98.44, "speed": 375, "Air": 29.7, "status": 1 },
    { "Machine_id": 'M49', "MachineNo": 49, "style": "1498A122:115", "kpicks": 173.69, "meter": 175.38, "speed": 553, "Air": 27.4, "status": 1 },
    { "Machine_id": 'M50', "MachineNo": 50, "style": "1498A122:115", "kpicks": 142.49, "meter": 153.81, "speed": 325, "Air": 37.3, "status": 0 },
    { "Machine_id": 'M51', "MachineNo": 50, "style": "1498A122:115", "kpicks": 142.49, "meter": 153.81, "speed": 325, "Air": 37.3, "status": 0 }]



  summary = [{ 'kpicks': { 'CurrentMonth': 569409.07, 'PreviousShift': 16120.30, 'CurrentShift': 10986.36 } },
  { 'meter': { 'CurrentMonth': 309523.32, 'PreviousShift': 8914.14, 'CurrentShift': 6031.03 } },
  { 'speed': { 'CurrentMonth': 531.1, 'PreviousShift': 573.51, 'CurrentShift': 573.96 } }
  ];

  stoppageCount: number = 0;
  activeCount: number = 0;
  idealCount: number = 0;

  constructor() {
    this.calculateStoppageAndActiveCount();
    this.buttonToDisplay();
  }

  calculateStoppageAndActiveCount() {
    for (const machineData of this.MachineDataArray) {
      if (machineData.status === 0) {
        this.stoppageCount++;
      }
      else if (machineData.status === 1) {
        this.activeCount++;
      }
      else {
        this.idealCount++;
      }
    }
  }


  buttonToDisplay(): string[] {
    const uniqueKeys = new Set<string>();

    for (const machineData of this.MachineDataArray) {
      for (const key of Object.keys(machineData)) {
        if (key !== 'Machine_id') {
          uniqueKeys.add(key);

        }
      }
    }

    return Array.from(uniqueKeys).sort();
  }


  keyVisibility: { [key: string]: boolean } = {
    MachineNo: true,
    status: true,
  };


  toggleKeyDisplay(key: string) {
    if (key != "MachineNo") {
      this.keyVisibility[key] = !this.keyVisibility[key];
    }
  }
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  isSummaryVisible(): boolean {
    for (const summaryItem of this.summary) {
      for (const key in summaryItem) {
        if (this.keyVisibility[key]) {
          return true;
        }
      }
    }
    return false;
  }
}
