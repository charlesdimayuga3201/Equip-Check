import { Component, OnInit } from '@angular/core';
import { DataService} from '../service/data.service';
import { Firestore , collectionData, docData,  doc, addDoc} from '@angular/fire/firestore';
import { Observable} from 'rxjs';

import { collection, query, orderBy, limit, getDocs, QuerySnapshot, QueryConstraint, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
@Component({
  selector: 'app-h-sprinkler',
  templateUrl: './h-sprinkler.page.html',
  styleUrls: ['./h-sprinkler.page.scss'],
})
export class HSprinklerPage implements OnInit {

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
    const collectionRef1 = collection(this.firestore, 'S1');
    const q1 = query(collectionRef1, orderBy('date', 'desc'));
    console.log(q1);
    getDocs(q1).then((querySnapshot: QuerySnapshot<DocumentData>) => {
      this.sortedData1 = querySnapshot.docs.map((doc) => doc.data());
      console.log(this.sortedData1);
    });
    
    const collectionRef2 = collection(this.firestore, 'S2');
    const q2 = query(collectionRef2, orderBy('date', 'desc'));
    console.log(q2);
    getDocs(q2).then((querySnapshot: QuerySnapshot<DocumentData>) => {
      this.sortedData2 = querySnapshot.docs.map((doc) => doc.data());
      console.log(this.sortedData2);
    });
      
    const collectionRef3 = collection(this.firestore, 'S3');
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