import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherDataComponent } from './current-weather-data.component';

describe('CurrentWeatherDataComponent', () => {
  let component: CurrentWeatherDataComponent;
  let fixture: ComponentFixture<CurrentWeatherDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentWeatherDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentWeatherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
