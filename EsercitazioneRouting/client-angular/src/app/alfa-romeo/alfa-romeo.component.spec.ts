import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlfaRomeoComponent } from './alfa-romeo.component';

describe('AlfaRomeoComponent', () => {
  let component: AlfaRomeoComponent;
  let fixture: ComponentFixture<AlfaRomeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlfaRomeoComponent]
    });
    fixture = TestBed.createComponent(AlfaRomeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
