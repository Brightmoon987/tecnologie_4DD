// email-form.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { Email } from '../email.model';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent {
  newEmail: Email = new Email('', '', '',false,false);

  @Output() emailSent = new EventEmitter<Email>();

  sendEmail() {
    this.emailSent.emit(this.newEmail);
    this.newEmail = new Email('', '', '',false,false);
  }
}
