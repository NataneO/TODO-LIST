import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  email: string = ''
  password: string = ''

  constructor() { }

  signup() {
    console.log('Username:', this.email);
    console.log('Password:', this.password);
  }

  alreadyRegistered(){
    console.log('Already registered');
  }
}
