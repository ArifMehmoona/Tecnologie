import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Alfa_romeo, Aston_martin, Bmw, Chevrolet, Dodge, El_secundo, Ford, Gmc, Mazda, Mercedes, Nissan, Porsche, Toyota } from 'models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  alfa_romeo: Alfa_romeo[];
  aston_martin: Aston_martin[];
  bmw: Bmw[];
  chevrolet: Chevrolet[];
  dodge: Dodge [];
  el_secundo: El_secundo [];
  ford: Ford[];
  gmc: Gmc[];
  mazda: Mazda[];
  mercedes: Mercedes[];
  nissan: Nissan[];
  porsche: Porsche[];
  toyota: Toyota[];
  
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
 
    this.http.get('https://3000-arifmehmoona-tecnologie-jgynhg2ntnw.ws-eu107.gitpod.io/api').subscribe(data => {
      this.alfa_romeo = data['Alfa_romeo'];
      this.aston_martin = data['Aston_martin'];
      this.chevrolet = data['Bmw'];
      this.dodge = data['Dodge'];
      this.el_secundo = data['El_secundo'];
      this.ford = data['Ford'];
      this.gmc = data['Gmc'];
      this.mazda = data['Mazda'];
      this.mercedes = data['Mercedes'];
      this.nissan = data['Nissan'];
      this.porsche = data['Porsche'];
      this.toyota = data['Toyota'];
  });
  }
}

