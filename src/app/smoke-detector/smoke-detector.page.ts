import { Component, OnInit } from '@angular/core';
import { DataService} from '../service/data.service';
import { Firestore , collectionData, docData,  doc, addDoc} from '@angular/fire/firestore';
import { Observable} from 'rxjs';

import { collection, query, orderBy, limit, getDocs, QuerySnapshot, QueryConstraint, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';

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





  ngOnInit() {
     const collectionRef = collection(this.firestore, 'SD1');
    const q = query(collectionRef, orderBy('date', 'desc'), limit(1));
    console.log(q);
    getDocs(q).then((querySnapshot: QuerySnapshot<DocumentData>) => {
      querySnapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const latestDocument = doc.data();
        this.sortedData= [latestDocument];
        console.log(this.sortedData);
      });
    });

    const collectionRef1 = collection(this.firestore, 'SD2');
    const q1 = query(collectionRef1, orderBy('date', 'desc'), limit(1));
    console.log(q1);
    getDocs(q1).then((querySnapshot: QuerySnapshot<DocumentData>) => {
      querySnapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const latestDocument = doc.data();
        this.sortedData1= [latestDocument];
        console.log(this.sortedData1);
      });
    });

    const collectionRef2 = collection(this.firestore, 'SD3');
    const q2 = query(collectionRef2, orderBy('date', 'desc'), limit(1));
    console.log(q2);
    getDocs(q2).then((querySnapshot: QuerySnapshot<DocumentData>) => {
      querySnapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const latestDocument = doc.data();
        this.sortedData2= [latestDocument];
        console.log(this.sortedData2);
      });
    });

  }
  sortedData2: any = [];
  sortedData1: any = [];
  sortedData: any[] = [];
  view1: any = [];
  view2: any = [];
  view3: any = [];
  
  constructor( private dataService: DataService, private firestore: Firestore) { 
    this.dataService.getSD1().subscribe(res =>{
      console.log(res); 
      this.view1 = res;
    })
  
    this.dataService.getSD2().subscribe(res =>{
      console.log(res); 
      this.view2 = res;
    })
  
    this.dataService.getSD3().subscribe(res =>{
      console.log(res); 
      this.view3 = res;
    })
  }
  
  
  }
  export interface SD1{
    id?: string;
    body: string;
    date: string;
    powersource: string;
    smokesensor: string;
    sound: string;
    time: string;
    inspected:string;
  
  }
  export interface SD2{
    id?: string;
    body: string;
    date: string;
    powersource: string;
    smokesensor: string;
    sound: string;
    time: string;
    inspected:string;
  
  }
  
  export interface SD3{
    id?: string;
    body: string;
    date: string;
    powersource: string;
    smokesensor: string;
    sound: string;
    time: string;
    inspected:string;
  
  }