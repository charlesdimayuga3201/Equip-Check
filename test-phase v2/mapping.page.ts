import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
    
  }

}
