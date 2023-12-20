import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { El_secundo } from 'models/model';


@Component({
  selector: 'app-el-secundo',
  templateUrl: './el-secundo.component.html',
  styleUrls: ['./el-secundo.component.css']
})
export class ElSecundoComponent {
  el_secundo: El_secundo[];

  constructor(private router:Router){
    this.el_secundo=this.router.getCurrentNavigation().extras.state as El_secundo[];
  }

}
