import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {
@ViewChild('roundButton', { static: true }) roundButton: any;

  
  // updateContent() {
  //   // Clear the content when the segment changes
  //   // You can modify this function to perform any other necessary updates
  //   if (this.selectedSegment !== 'segment1') {
  //     // Clear the content variables when not in Segment 1
  //     // Adjust the conditions and clear the appropriate content variables as needed
  //     this.selectedOption = null;
  //   }
    
  // }
 
  selectedTab: string = 'fire-extinguisher';
  ngOnInit() {
  }

  constructor(private router: Router) { }
  FireExtinguisher(){
    this.router.navigate(['/fire-extinguisher']);
    }
  SmokeDetector(){
  this.router.navigate(['/smoke-detector']);
  }
  sprinkler(){
    this.router.navigate(['/sprinkler']);
  
}

}
