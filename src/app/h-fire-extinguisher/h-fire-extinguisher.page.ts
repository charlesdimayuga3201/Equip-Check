import { Component, OnInit } from '@angular/core';
import { DataService} from '../service/data.service';
import { Firestore , collectionData, docData,  doc, addDoc} from '@angular/fire/firestore';
import { Observable} from 'rxjs';

import { collection, query, orderBy, limit, getDocs, QuerySnapshot, QueryConstraint, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
@Component({
  selector: 'app-h-fire-extinguisher',
  templateUrl: './h-fire-extinguisher.page.html',
  styleUrls: ['./h-fire-extinguisher.page.scss'],
})
export class HFireExtinguisherPage implements OnInit {
  FE!:string;
  FE1!:string;
  FE2!:string;
  selectedOption!: string ;
  selectedOption1!: string;
  selectedOption2!: string;
  selectedSegment!: string;
  selectedSegment1!: string;
  FID!: string
  latestDate!: Date;
  
  ngOnInit() {
    // this.view.sort((a: any, b: any) => {
    //   const dateA = new Date(a.date);
    //   const dateB = new Date(b.date);
    //   return dateB.getTime() - dateA.getTime();
    // });
    
    // const collectionRef = collection(this.firestore, 'FireExtinguisher');
    // const q = query(collectionRef, orderBy('date', 'desc'), limit(1));
    // console.log(q);
    // getDocs(q).then((querySnapshot: QuerySnapshot<DocumentData>) => {
    //   querySnapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
    //     const latestDocument = doc.data();
    //     this.sortedData= [latestDocument];
    //     console.log(this.sortedData);
    //   });
    // });

    const collectionRef1 = collection(this.firestore, 'E1');
const q1 = query(collectionRef1, orderBy('date', 'desc'), );
console.log(q1);
getDocs(q1).then((querySnapshot: QuerySnapshot<DocumentData>) => {
  this.sortedData1 = querySnapshot.docs.map((doc) => doc.data());
  console.log(this.sortedData1);
});

const collectionRef2 = collection(this.firestore, 'E2');
const q2 = query(collectionRef2, orderBy('date', 'desc'));
console.log(q2);
getDocs(q2).then((querySnapshot: QuerySnapshot<DocumentData>) => {
  this.sortedData2 = querySnapshot.docs.map((doc) => doc.data());
  console.log(this.sortedData2);
});
  
const collectionRef3 = collection(this.firestore, 'E3');
const q3 = query(collectionRef3, orderBy('date', 'desc'));
console.log(q3);
getDocs(q3).then((querySnapshot: QuerySnapshot<DocumentData>) => {
  this.sortedData3 = querySnapshot.docs.map((doc) => doc.data());
  console.log(this.sortedData3);
});
  }
  sortedData3: any = [];
  sortedData2: any = [];
  sortedData1: any = [];
  sortedData: any[] = [];
  view: any = [];
  view2: any = [];

  constructor( private dataService: DataService, private firestore: Firestore) { 
   

    // Set the latestDate to the date of the first item in the sorted view array
    if (this.view.length > 0) {
      this.latestDate = new Date(this.view[0].date);
    }
    this.dataService.getFireExtinguisher().subscribe(res =>{
      console.log(res); 
      this.view = res;
    })
    this.dataService.getListFireExtinguisher().subscribe(res =>{
      console.log(res); 
      this.view2 = res;
    })
  }
}
export interface FireExtinguisher{
  id?: string;
  body: string;
  date: string;
  time:string;
  gauge: string;
  nozzle: string;
  pinlock: string;
  inspected:string;
}
export interface ListFireExtinguisher{
  id?: string;
  building: string;
  floor: string;
}