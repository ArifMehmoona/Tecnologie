import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Nissan } from 'models/model';


@Component({
  selector: 'app-nissan',
  templateUrl: './nissan.component.html',
  styleUrls: ['./nissan.component.css']
})
export class NissanComponent {
  nissan: Nissan[];

  constructor(private router:Router){
    this.nissan=this.router.getCurrentNavigation().extras.state as Nissan[];
  }

}
