import { Component, OnInit, Input } from '@angular/core';
import { DataService} from '../service/data.service';
import { Firestore , collectionData, docData,  collection, doc, addDoc} from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.page.html',
  styleUrls: ['./mapping.page.scss'],
})


export class MappingPage implements OnInit {


  FE!:string;
  FE1!:string;
  FE2!:string;
  selectedOption!: string ;
  selectedOption1!: string;
  selectedOption2!: string;
  selectedSegment!: string;
  selectedSegment1!: string;
  // @Input() id!: string;
  // fireextinguisher!: FireExtinguisher;


  // task$ = collectionData(collection(this.firestore, 'FireExtinguisher'))as Observable<FireExtinguisher[]>;
  // constructor(private readonly firestore: Firestore){}
  view: any = [];

  constructor( private dataService: DataService) { 
    this.dataService.getFireExtinguisher().subscribe(res =>{
      console.log(res); 
      this.view = res;
    })
  }

  ngOnInit() {

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