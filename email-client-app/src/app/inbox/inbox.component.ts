// src/app/inbox/inbox.component.ts

import { Component } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  sentMails: Email[] = [];
  from: string = '';
  to: string = '';
  subject: string = '';
  message: string = '';

  sendMail() {
    const newMail = new Email(this.from, this.to, this.subject, this.message);
    this.sentMails.push(newMail);
    // Clear form fields
    this.from = '';
    this.to = '';
    this.subject = '';
    this.message = '';
  }
}
