import { Component } from '@angular/core';

//decorator to define the componenet
//must define two feilds selector and templateURL
@Component({
  selector: 'signup',
  standalone:true,
  templateUrl: './signup.component.html', // template :<h1>singup works </h1>
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

}
