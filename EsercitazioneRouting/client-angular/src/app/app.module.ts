import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AlfaRomeoComponent,
    AstonMartinComponent,
    BmwComponent,
    ChevroletComponent,
    DodgeComponent,
    ElSecundoComponent,
    FordComponent,
    GmcComponent,
    HomePageComponent,
    MazdaComponent,
    MercedesComponent,
    NissanComponent,
    PorscheComponent,
    ToyotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
