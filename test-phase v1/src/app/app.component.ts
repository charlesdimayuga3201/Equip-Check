import { Component } from '@angular/core';
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
    { title: 'History', url: '/folder/history', icon: 'time' },
    // { title: 'Trash', url: '/folder/trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/spam', icon: 'warning' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  // constructor() {}
}
