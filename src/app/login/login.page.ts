import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'], 
})
export class LoginPage {
  Username!: string;
  Password!: string;

  constructor(private router: Router) {}

  logMeIn() {

    if (this.Username == 'admin' && this.Password == '1234') {
      // Redirect to home page
      this.router.navigate(['./home']);
    } else {
      // Show error message or handle failed login
      console.log('Invalid credentials');
    }
  
  
  }
}

