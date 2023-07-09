import { Component, OnInit } from '@angular/core';

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
  selectedSegment1!: string;
  constructor() { }

  ngOnInit() {
  }

}
