

import { Component } from '@angular/core';

@Component({
  
  
  selector: 'app-root',
  template: `
    <div>
      <app-weather></app-weather>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'MY-WEATHER-APP';
}
