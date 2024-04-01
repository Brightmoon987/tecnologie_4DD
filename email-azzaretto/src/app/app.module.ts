// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent,
    SentMailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // Aggiungi FormsModule qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
