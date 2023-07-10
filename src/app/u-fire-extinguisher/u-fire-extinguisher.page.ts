import { Component, OnInit } from '@angular/core';

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
  constructor() { }
  clearSelection() {
    this.isChecked = false;
  }
  
  updateData() {
    // Perform the update action
    console.log('Data updated!');
  }
  
  ngOnInit() {
  }

}
