import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mazda } from 'models/model';

@Component({
  selector: 'app-mazda',
  templateUrl: './mazda.component.html',
  styleUrls: ['./mazda.component.css']
})
export class MazdaComponent {
  mazda: Mazda[];

  constructor(private router:Router){
    this.mazda=this.router.getCurrentNavigation().extras.state as Mazda[];
  }
}
