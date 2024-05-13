import { Component } from '@angular/core';
import { WeatherDataService } from '../weather-data.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherDataService) { }

  getWeather() {
    this.weatherService.getWeatherData(this.city)
      .subscribe(data => {
        this.weatherData = data;
      }, error => {
        alert("Nome della città inesistente");
      });
  }
}
