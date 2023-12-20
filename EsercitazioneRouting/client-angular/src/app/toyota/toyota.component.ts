import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Toyota } from 'models/model';

@Component({
  selector: 'app-toyota',
  templateUrl: './toyota.component.html',
  styleUrls: ['./toyota.component.css']
})
export class ToyotaComponent {
  toyota: Toyota[];

  constructor(private router:Router){
    this.toyota=this.router.getCurrentNavigation().extras.state as Toyota[];
  }
}
