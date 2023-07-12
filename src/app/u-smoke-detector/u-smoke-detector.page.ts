import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-smoke-detector',
  templateUrl: './u-smoke-detector.page.html',
  styleUrls: ['./u-smoke-detector.page.scss'],
})
export class USmokeDetectorPage implements OnInit {
 
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

  ngOnInit() {
  }
  updateData() {
    // Perform the update action
    console.log('Data updated!');
  }
}
