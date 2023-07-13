import { Component, OnInit } from '@angular/core';
import { DataService} from '../service/data.service';
import { Firestore , collectionData, docData,  collection, doc, addDoc} from '@angular/fire/firestore';
import { Observable} from 'rxjs';

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


  ngOnInit() {
  }


view1: any = [];
view2: any = [];
view3: any = [];

constructor( private dataService: DataService) { 
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