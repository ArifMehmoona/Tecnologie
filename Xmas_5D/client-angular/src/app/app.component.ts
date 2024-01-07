import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  results: string[];
   constructor(private http: HttpClient) {}
   ngOnInit(): void {
    this.http.get('https://3000-arifmehmoona-tecnologie-z4g123fev8k.ws-eu107.gitpod.io/api').subscribe(data => {
     this.results = data['results'];
   });
  }
 }
