// sent-mail.component.ts
import { Component, Input } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-sent-mail',
  templateUrl: './sent-mail.component.html',
  styleUrls: ['./sent-mail.component.css']
})
export class SentMailComponent {
  @Input() sentEmails: Email[] = [];

  toggleExpand(email: Email) {
    email.expanded = !email.expanded;
  }

  makeSpecial(email: Email) {
    email.special = true;
  }
}
