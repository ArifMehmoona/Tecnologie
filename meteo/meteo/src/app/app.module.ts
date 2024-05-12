import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AirPollutionComponent } from './air-pollution/air-pollution.component';
import { CurrentWeatherDataComponent } from './current-weather-data/current-weather-data.component';
import { FireWeatherIndexComponent } from './fire-weather-index/fire-weather-index.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HourlyForecastComponent } from './hourly-forecast/hourly-forecast.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AirPollutionComponent,
    CurrentWeatherDataComponent,
    FireWeatherIndexComponent,
    ForecastComponent,
    HourlyForecastComponent
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