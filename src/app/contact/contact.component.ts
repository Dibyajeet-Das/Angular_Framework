import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  imports: [CommonModule,FormsModule],
  standalone: true,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  //string, number, boolean, date , object, array, null undefined
  firstName: string = "Rahul";
  angularVersion = "version 18";
  version:number = 25;
  isActive: boolean = false;
  currentDate: Date = new Date(); //we get whole object of the date 
  //We can create an Object as well as array
  inputType: String = "checkbox";



  //Creating function

  shoWelcomeMessage() {
    alert("Welcome to Angular 18");
  }

  showMessage (message: String) {
    alert(message);
  } 
  
}
