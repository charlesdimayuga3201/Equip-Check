import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService} from '../service/data.service';
import { Firestore , collectionData, docData,  collection, doc, addDoc} from '@angular/fire/firestore';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-fire-extinguisher',
  templateUrl: './fire-extinguisher.page.html',
  styleUrls: ['./fire-extinguisher.page.scss'],
})
export class FireExtinguisherPage implements OnInit {

  
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


  ngOnInit() {
  }
//   constructor(private router: Router) { }
//   FireExtinguisher(){
//     this.router.navigate(['/fire-extinguisher']);
//     }
//   SmokeDetector(){
//   this.router.navigate(['/smoke-detector']);
//   }
//   sprinkler(){
//     this.router.navigate(['/sprinkler']);
  
// }
  
view1: any = [];
view2: any = [];
view3: any = [];

constructor( private dataService: DataService) { 
  this.dataService.getE1().subscribe(res =>{
    console.log(res); 
    this.view1 = res;
  })

  this.dataService.getE2().subscribe(res =>{
    console.log(res); 
    this.view2 = res;
  })

  this.dataService.getE3().subscribe(res =>{
    console.log(res); 
    this.view3 = res;
  })
}


}
export interface E1{
  id?: string;
  body: string;
  date: string;
  gauge: string;
  nozzle: string;
  pinlock: string;
  inspected:string;

}
export interface E2{
  id?: string;
  body: string;
  date: string;
  gauge: string;
  nozzle: string;
  pinlock: string;
  inspected:string;

}
export interface E3{
  id?: string;
  body: string;
  date: string;
  gauge: string;
  nozzle: string;
  pinlock: string;
  inspected:string;

}