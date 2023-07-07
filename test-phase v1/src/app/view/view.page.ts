import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
// export class ViewPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class ViewPage{
    isChecked: boolean = false;

  constructor() {}

  clearSelection() {
    this.isChecked = false;
  }
}
