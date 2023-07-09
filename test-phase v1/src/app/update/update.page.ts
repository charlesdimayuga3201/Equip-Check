import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
// export class UpdatePage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
export class UpdatePage{
  isChecked: boolean = false;
  isChecked1: boolean = false;
  isChecked2: boolean = false;
  isChecked3: boolean = false;

constructor() {}

clearSelection() {
  this.isChecked = false;
}

updateData() {
  // Perform the update action
  console.log('Data updated!');
}


}

