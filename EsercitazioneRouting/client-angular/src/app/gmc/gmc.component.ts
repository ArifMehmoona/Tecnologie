import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Gmc } from 'models/model';

@Component({
  selector: 'app-gmc',
  templateUrl: './gmc.component.html',
  styleUrls: ['./gmc.component.css']
})
export class GmcComponent {
  gmc: Gmc[];

  constructor(private router:Router){
    this.gmc=this.router.getCurrentNavigation().extras.state as Gmc[];
  }

}
