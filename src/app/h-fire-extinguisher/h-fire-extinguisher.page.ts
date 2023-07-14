import { Component, OnInit } from '@angular/core';
import { DataService} from '../service/data.service';
import { Firestore , collectionData, docData,  collection, doc, addDoc} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
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
 

  ngOnInit() {
  }
  view: any = [];

  constructor( private dataService: DataService) { 
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