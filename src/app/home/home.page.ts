import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  menuItems = [
    { title: 'View', path: '/view', icon: 'eye' },
    { title: 'Update', path: '/update', icon: 'create' },
    { title: 'View Record', path: '/view-record', icon: 'list' }
  ];

  constructor() {}
}
