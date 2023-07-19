import { Component, OnInit } from '@angular/core';
import { DataService} from '../service/data.service';
import { Firestore , collectionData, docData,  doc, addDoc} from '@angular/fire/firestore';
import { Observable} from 'rxjs';

import { collection, query, orderBy, limit, getDocs, QuerySnapshot, QueryConstraint, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
@Component({
  selector: 'app-sprinkler',
  templateUrl: './sprinkler.page.html',
  styleUrls: ['./sprinkler.page.scss'],
})
export class SprinklerPage implements OnInit {

  FE!:string;
  FE1!:string;
  FE2!:string;
  selectedOption!: string ;
  selectedOption1!: string;
  selectedOption2!: string;
  selectedSegment!: string;
  sortedData2: any = [];
  sortedData1: any = [];
  sortedData: any[] = [];


  ngOnInit() {
    const collectionRef = collection(this.firestore, 'S1');
    const q = query(collectionRef, orderBy('date', 'desc'), limit(1));
    console.log(q);
    getDocs(q).then((querySnapshot: QuerySnapshot<DocumentData>) => {
      querySnapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const latestDocument = doc.data();
        this.sortedData= [latestDocument];
        console.log(this.sortedData);
      });
    });

    const collectionRef1 = collection(this.firestore, 'S2');
    const q1 = query(collectionRef1, orderBy('date', 'desc'), limit(1));
    console.log(q1);
    getDocs(q1).then((querySnapshot: QuerySnapshot<DocumentData>) => {
      querySnapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
        const latestDocument = doc.data();
        this.sortedData1= [latestDocument]; 
        console.log(this.sortedData1);
      });
    });

    const collectionRef2 = collection(this.firestore, 'S3');
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


view1: any = [];
view2: any = [];
view3: any = [];

constructor( private dataService: DataService, private firestore: Firestore) { 
  this.dataService.getS1().subscribe(res =>{
    console.log(res); 
    this.view1 = res;
  })

  this.dataService.getS2().subscribe(res =>{
    console.log(res); 
    this.view2 = res;
  })

  this.dataService.getS3().subscribe(res =>{
    console.log(res); 
    this.view3 = res;
  })
}


}
export interface S1{
  id?: string;

  date: string;
  sprinklerhead: string;
  piping: string;
  valves: string;
  backflowpreventer: string;
  pressureregulator: string;
  watersource: string;
  controlpanel: string;
  time: string;
  inspected:string;

}
export interface S2{
  id?: string;

  date: string;
  sprinklerhead: string;
  piping: string;
  valves: string;
  backflowpreventer: string;
  pressureregulator: string;
  watersource: string;
  controlpanel: string;
  time: string;
  inspected:string;

}
export interface S3{
  id?: string;

  date: string;
  sprinklerhead: string;
  piping: string;
  valves: string;
  backflowpreventer: string;
  pressureregulator: string;
  watersource: string;
  controlpanel: string;
  time: string;
  inspected:string;

}