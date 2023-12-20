import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AlfaRomeoComponent } from './alfa-romeo/alfa-romeo.component';
import { AstonMartinComponent } from './aston-martin/aston-martin.component';
import { BmwComponent } from './bmw/bmw.component';
import { ChevroletComponent } from './chevrolet/chevrolet.component';
import { DodgeComponent } from './dodge/dodge.component';
import { ElSecundoComponent } from './el-secundo/el-secundo.component';
import { FordComponent } from './ford/ford.component';
import { GmcComponent } from './gmc/gmc.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MazdaComponent } from './mazda/mazda.component';
import { MercedesComponent } from './mercedes/mercedes.component';
import { NissanComponent } from './nissan/nissan.component';
import { PorscheComponent } from './porsche/porsche.component';
import { ToyotaComponent } from './toyota/toyota.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch: 'full'},
  { path: 'home-page', component: HomePageComponent},
  { path: 'alfa_romeo', component: AlfaRomeoComponent},
  { path: 'aston-martin', component: AstonMartinComponent},
  { path: 'bmw', component: BmwComponent},
  { path: 'chevrolet', component: ChevroletComponent},
  { path: 'dodge', component: DodgeComponent},
  { path: 'el_secundo', component: ElSecundoComponent},
  { path: 'ford', component: FordComponent},
  { path: 'gmc', component: GmcComponent},
  { path: 'mazda', component: MazdaComponent},
  { path: 'mercedes', component: MercedesComponent},
  { path: 'nissan', component: NissanComponent},
  { path: 'porsche', component: PorscheComponent},
  { path: 'toyota', component: ToyotaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
