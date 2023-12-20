import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bmw } from 'models/model';

@Component({
  selector: 'app-bmw',
  templateUrl: './bmw.component.html',
  styleUrls: ['./bmw.component.css']
})
export class BmwComponent {
  bmw: Bmw[];

  constructor(private router:Router){
    this.bmw=this.router.getCurrentNavigation().extras.state as Bmw[];
  }
}
