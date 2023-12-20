import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ford } from 'models/model';


@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrls: ['./ford.component.css']
})
export class FordComponent {
  ford: Ford[];

  constructor(private router:Router){
    this.ford=this.router.getCurrentNavigation().extras.state as Ford[];
  }
}
