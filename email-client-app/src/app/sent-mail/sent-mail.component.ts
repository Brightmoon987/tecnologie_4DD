// src/app/sent-mail/sent-mail.component.ts

import { Component } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  sentMails: Email[] = [];

  toggleSpecial(mail: Email) {
    mail.special = !mail.special;
  }

  expandMail(mail: Email) {
    mail.expanded = true;
  }

  closeMail(mail: Email) {
    mail.expanded = false;
  }
}