import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-u-fire-extinguisher',
  templateUrl: './u-fire-extinguisher.page.html',
  styleUrls: ['./u-fire-extinguisher.page.scss'],
})
export class UFireExtinguisherPage implements OnInit {
  FE!:string;
  FE1!:string;
  FE2!:string;
  selectedOption!: string ;
  selectedOption1!: string;
  selectedOption2!: string;
  selectedSegment!: string;
  selectedSegment1!: string;
  
 
 
  isChecked: boolean = false;
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;

  currentTime: string | undefined;
  currentDate: string | undefined;
  constructor(private platform: Platform) { }
  clearSelection() {
    this.isChecked = false;
  }
  
  updateData() {
    // Perform the update action
    console.log('Data updated!');
  }
  getCurrentDate() {
    const currentDate = new Date();
    this.currentDate = currentDate.toDateString();
  }
  
  getCurrentTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    
    let updatedHours = hours;
    let meridiem = 'AM';

    if (updatedHours > 12) {
      updatedHours -= 12;
      meridiem = 'PM';
    }
  
    return `${updatedHours}:${minutes} ${meridiem}`;
  }
  getUpdatedTime() {
    this.currentTime = this.getCurrentTime();
  }
  ngOnInit() {
     this.getCurrentDate();
     this.getUpdatedTime();
  }

}
