import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToyotaComponent } from './toyota.component';

describe('ToyotaComponent', () => {
  let component: ToyotaComponent;
  let fixture: ComponentFixture<ToyotaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToyotaComponent]
    });
    fixture = TestBed.createComponent(ToyotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
