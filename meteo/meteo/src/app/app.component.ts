import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppComponent } from './app/app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiKey: string = 'c292b4d7fc4e2110c36bb02818c17560'; // Sostituisci con la tua chiave API

  constructor(private http: HttpClient) { }

  // Metodo per ottenere i dati del rischio stradale
  getRoadRiskData(latitude: number, longitude: number): Observable<any> {
    return this.http.get<any>(`https://api.example.com/road-risk?lat=${latitude}&lon=${longitude}&apikey=${this.apiKey}`);
  }

  // Metodo per ottenere i dati meteorologici attuali
  getCurrentWeatherData(city: string): Observable<any> {
    return this.http.get<any>(`https://api.example.com/current-weather?q=${city}&appid=${this.apiKey}`);
  }

  // Metodo per ottenere le previsioni orarie per 4 giorni
  getHourlyForecast(city: string): Observable<any> {
    return this.http.get<any>(`https://api.example.com/hourly-forecast?q=${city}&appid=${this.apiKey}`);
  }

  // Metodo per ottenere i dati sulla qualità dell'aria
  getAirPollutionData(city: string): Observable<any> {
    return this.http.get<any>(`https://api.example.com/air-pollution?q=${city}&appid=${this.apiKey}`);
  }

  // Metodo per ottenere i dati sull'indice meteorologico per gli incendi
  getFireWeatherIndexData(latitude: number, longitude: number): Observable<any> {
    return this.http.get<any>(`https://api.example.com/fire-weather-index?lat=${latitude}&lon=${longitude}&apikey=${this.apiKey}`);
  }


}
