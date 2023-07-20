import { Component, OnInit } from '@angular/core';
import { DataService} from '../service/data.service';
import { Firestore , collectionData, docData,  doc, addDoc} from '@angular/fire/firestore';
import { Observable} from 'rxjs';

import { collection, query, orderBy, limit, getDocs, QuerySnapshot, QueryConstraint, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
@Component({
  selector: 'app-h-smoke-detector',
  templateUrl: './h-smoke-detector.page.html',
  styleUrls: ['./h-smoke-detector.page.scss'],
})
export class HSmokeDetectorPage implements OnInit {

  FE!:string;
  FE1!:string;
  FE2!:string;
  selectedOption!: string ;
  selectedOption1!: string;
  selectedOption2!: string;
  selectedSegment!: string;
  selectedSegment1!: string;
  FID!: string

  ngOnInit() {
    const collectionRef1 = collection(this.firestore, 'SD1');
    const q1 = query(collectionRef1, orderBy('date', 'desc'));
    console.log(q1);
    getDocs(q1).then((querySnapshot: QuerySnapshot<DocumentData>) => {
      this.sortedData1 = querySnapshot.docs.map((doc) => doc.data());
      console.log(this.sortedData1);
    });
    
    const collectionRef2 = collection(this.firestore, 'SD2');
    const q2 = query(collectionRef2, orderBy('date', 'desc'));
    console.log(q2);
    getDocs(q2).then((querySnapshot: QuerySnapshot<DocumentData>) => {
      this.sortedData2 = querySnapshot.docs.map((doc) => doc.data());
      console.log(this.sortedData2);
    });
      
    const collectionRef3 = collection(this.firestore, 'SD3');
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
    this.dataService.getFireExtinguisher().subscribe(res =>{
      console.log(res); 
      this.view = res;
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
