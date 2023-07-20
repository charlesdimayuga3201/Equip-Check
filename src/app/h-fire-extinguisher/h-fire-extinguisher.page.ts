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