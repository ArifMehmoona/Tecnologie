import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Aston_martin } from 'models/model';

@Component({
  selector: 'app-aston-martin',
  templateUrl: './aston-martin.component.html',
  styleUrls: ['./aston-martin.component.css']
})
export class AstonMartinComponent {
  aston_martin: Aston_martin[];

  constructor(private router:Router){
    this.aston_martin=this.router.getCurrentNavigation().extras.state as Aston_martin[];
  }
  
}
