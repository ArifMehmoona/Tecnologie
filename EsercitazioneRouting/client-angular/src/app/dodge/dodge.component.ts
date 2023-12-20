import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dodge } from 'models/model';


@Component({
  selector: 'app-dodge',
  templateUrl: './dodge.component.html',
  styleUrls: ['./dodge.component.css']
})
export class DodgeComponent {
  dodge: Dodge[];

  constructor(private router:Router){
    this.dodge=this.router.getCurrentNavigation().extras.state as Dodge[];
  }
}
