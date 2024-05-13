import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  apiKey = 'b9b6fcca8fe13b12b976890ec3443b2e';

  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}