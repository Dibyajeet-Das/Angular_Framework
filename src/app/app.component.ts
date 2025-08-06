import { Component } from '@angular/core';
// import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    // NavComponent,
    LoginComponent,
    SignupComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tut';
  friend = 'Rahul Kumar';
  x = 10;
  y = 20;
}