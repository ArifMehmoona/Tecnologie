import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireWeatherIndexComponent } from './fire-weather-index.component';

describe('FireWeatherIndexComponent', () => {
  let component: FireWeatherIndexComponent;
  let fixture: ComponentFixture<FireWeatherIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireWeatherIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireWeatherIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
