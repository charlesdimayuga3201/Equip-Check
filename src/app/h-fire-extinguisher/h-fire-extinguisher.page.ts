import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
