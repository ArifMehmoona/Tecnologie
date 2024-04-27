import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoadRiskService {
  private apiKey: string = 'c292b4d7fc4e2110c36bb02818c17560'; 

  constructor(private http: HttpClient) { }

  getRoadRiskData(latitude: number, longitude: number) {
    return this.http.get<any>(`https://api.provider.com/road-risk?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}`);
  }
}
