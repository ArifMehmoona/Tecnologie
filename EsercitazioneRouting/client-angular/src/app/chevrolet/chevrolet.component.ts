import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Chevrolet } from 'models/model';


@Component({
  selector: 'app-chevrolet',
  templateUrl: './chevrolet.component.html',
  styleUrls: ['./chevrolet.component.css']
})
export class ChevroletComponent {
  chevrolet: Chevrolet[];

  constructor(private router:Router){
    this.chevrolet=this.router.getCurrentNavigation().extras.state as Chevrolet[];
  }
}
