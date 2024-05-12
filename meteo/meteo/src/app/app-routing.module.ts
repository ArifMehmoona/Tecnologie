import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AirPollutionComponent } from './air-pollution/air-pollution.component';
import { CurrentWeatherDataComponent } from './current-weather-data/current-weather-data.component';
import { FireWeatherIndexComponent } from './fire-weather-index/fire-weather-index.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HourlyForecastComponent } from './hourly-forecast/hourly-forecast.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'AirPollution', component: AirPollutionComponent}, 
  { path: 'Home', component: HomeComponent},
  { path: 'CurrentWeatherData', component: CurrentWeatherDataComponent},
  { path: 'FireWeatherIndex', component: FireWeatherIndexComponent},
  { path: 'Forecast', component: ForecastComponent},
  { path: 'HourlyForecast', component: HourlyForecastComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }