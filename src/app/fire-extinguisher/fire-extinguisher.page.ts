import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService} from '../service/data.service';

import { Firestore , collectionData, docData,  doc, addDoc} from '@angular/fire/firestore';
import { Observable} from 'rxjs';

import { collection, query, orderBy, limit, getDocs, QuerySnapshot, QueryConstraint, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';


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
  FireExtinguisher!: string; 

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

const collectionRef = collection(this.firestore, 'E1');
    const q = query(collectionRef, orderBy('date', 'desc'), limit(1));
    console.log(q);
    getDocs(q).then((querySnapshot: QuerySnapshot<DocumentData>) => {
      querySnapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const latestDocument = doc.data();
        this.sortedData= [latestDocument];
        console.log(this.sortedData);
      });
    });

    const collectionRef1 = collection(this.firestore, 'E2');
    const q1 = query(collectionRef1, orderBy('date', 'desc'), limit(1));
    console.log(q1);
    getDocs(q1).then((querySnapshot: QuerySnapshot<DocumentData>) => {
      querySnapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const latestDocument = doc.data();
        this.sortedData1= [latestDocument];
        console.log(this.sortedData1);
      });
    });
    const collectionRef2 = collection(this.firestore, 'E3');
    const q2 = query(collectionRef2, orderBy('date', 'desc'), limit(1));
    console.log(q2);
    getDocs(q2).then((querySnapshot: QuerySnapshot<DocumentData>) => {
      querySnapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const latestDocument = doc.data();
        this.sortedData2= [latestDocument];
        console.log(this.sortedData2);
      });
    });



//     const collectionRef1 = collection(this.firestore, 'E1');
// const q1 = query(collectionRef1, orderBy('date', 'desc'));
// console.log(q1);
// getDocs(q1).then((querySnapshot: QuerySnapshot<DocumentData>) => {
//   this.sortedData1 = querySnapshot.docs.map((doc) => doc.data());
//   console.log(this.sortedData1);
// });
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
sortedData2: any[] = [];
sortedData1: any = [];
sortedData: any[] = [];
view1: any = [];
view2: any = [];
view3: any = [];

constructor( private dataService: DataService, private firestore:Firestore) { 
  
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