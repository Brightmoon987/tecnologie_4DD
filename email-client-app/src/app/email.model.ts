// src/app/email.model.ts

export class Email {
    from: string;
    to: string;
    subject: string;
    message: string;
    special: boolean;
    expanded: boolean; // Aggiungi questa proprietà
  
    constructor(from: string, to: string, subject: string, message: string) {
      this.from = from;
      this.to = to;
      this.subject = subject;
      this.message = message;
      this.special = true; // Inizialmente la mail non è speciale
      this.expanded = true; // Inizialmente la mail non è espansa
    }
  }