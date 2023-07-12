import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-u-sprinkler',
  templateUrl: './u-sprinkler.page.html',
  styleUrls: ['./u-sprinkler.page.scss'],
})
export class USprinklerPage implements OnInit {
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
  isChecked4: boolean = false;
  isChecked5: boolean = false;
  isChecked6: boolean = false;
  isChecked7: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  updateData() {
    // Perform the update action
    console.log('Data updated!');
  }
}
