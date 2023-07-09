import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smoke-detector',
  templateUrl: './smoke-detector.page.html',
  styleUrls: ['./smoke-detector.page.scss'],
})
export class SmokeDetectorPage implements OnInit {
 
  FE!:string;
  FE1!:string;
  FE2!:string;
  selectedOption!: string ;
  selectedOption1!: string;
  selectedOption2!: string;
  selectedSegment!: string;
  selectedSegment1!: string;
  // updateContent() {
  //   // Clear the content when the segment changes
  //   // You can modify this function to perform any other necessary updates
  //   if (this.selectedSegment !== 'segment1') {
  //     // Clear the content variables when not in Segment 1
  //     // Adjust the conditions and clear the appropriate content variables as needed
  //     this.selectedOption = null;
  //   }
    
  // }



  constructor() { }

  ngOnInit() {
  }

}
