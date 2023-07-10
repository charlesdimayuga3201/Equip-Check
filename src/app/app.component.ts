import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  public appPages = [
    { title: 'Mapping', url: '/mapping', icon: 'location' },
    { title: 'View', url: '/view', icon: 'search-circle' },
    { title: 'Update', url: '/update', icon: 'sync-circle' },
    { title: 'History', url: '/history', icon: 'time' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  // public appPages1 = [
  //   { title: 'Trash', url: '/folder/trash', icon: 'trash' },
  //   { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  //   { title: 'Mapping', url: '/mapping', icon: 'location' },
  //   { title: 'View', url: '/view', icon: 'search-circle' },
  //   { title: 'Update', url: '/update', icon: 'sync-circle' },
  //   { title: 'History', url: '/folder/history', icon: 'time' },
  
  // ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  // constructor() {}
  constructor(private router: Router) {}

  shouldShowMenu() {
    // Check the current route and conditionally show/hide the menu
    
    return this.router.url !== '/login';
 
  }

}