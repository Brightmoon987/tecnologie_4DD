import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';

import { FourthComponentComponent } from './fourth-component/fourth-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FifthComponentComponent } from './fifth-component/fifth-component.component';
import { SixthComponentComponent } from './sixth-component/sixth-component.component';
import { SeventhComponentComponent } from './seventh-component/seventh-component.component';
import { EightComponentComponent } from './eight-component/eight-component.component';
import { NinthComponentComponent } from './ninth-component/ninth-component.component';
import { TenthComponentComponent } from './tenth-component/tenth-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    
    FourthComponentComponent,
         HomeComponentComponent,
         FifthComponentComponent,
         SixthComponentComponent,
         SeventhComponentComponent,
         EightComponentComponent,
         NinthComponentComponent,
         TenthComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
