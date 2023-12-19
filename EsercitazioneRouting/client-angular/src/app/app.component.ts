import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alfa_romeo } from 'models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  alfa_romeo: Alfa_romeo[];
  
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
 
  this.http.get('https://3000-arifmehmoona-tecnologie-jgynhg2ntnw.ws-eu107.gitpod.io/api').subscribe(data => {
    this.alfa_romeo = data['Alfa_romeo'];
  });
  }
  }

