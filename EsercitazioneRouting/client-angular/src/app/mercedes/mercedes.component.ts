import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mercedes } from 'models/model';

@Component({
  selector: 'app-mercedes',
  templateUrl: './mercedes.component.html',
  styleUrls: ['./mercedes.component.css']
})
export class MercedesComponent {
  mercedes: Mercedes[];

  constructor(private router:Router){
    this.mercedes=this.router.getCurrentNavigation().extras.state as Mercedes[];
  }

}
