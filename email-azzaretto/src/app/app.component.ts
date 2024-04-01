import { Component } from '@angular/core';
import { Email } from './email.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-azzaretto';
  allEmails: Email[] = [];
  onEmailSent(email: Email) {
    this.allEmails.push(email);


  }
}