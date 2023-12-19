import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alfa_romeo } from 'models/model';

@Component({
  selector: 'app-alfa-romeo',
  templateUrl: './alfa-romeo.component.html',
  styleUrls: ['./alfa-romeo.component.css']
})
export class AlfaRomeoComponent {
  alfa_romeo: Alfa_romeo[];

  constructor(private router:Router){
    this.alfa_romeo=this.router.getCurrentNavigation().extras.state as Alfa_romeo[];
  }
  
}
