import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Porsche } from 'models/model';

@Component({
  selector: 'app-porsche',
  templateUrl: './porsche.component.html',
  styleUrls: ['./porsche.component.css']
})
export class PorscheComponent {
  porsche: Porsche[];

  constructor(private router:Router){
    this.porsche=this.router.getCurrentNavigation().extras.state as Porsche[];
  }
}
