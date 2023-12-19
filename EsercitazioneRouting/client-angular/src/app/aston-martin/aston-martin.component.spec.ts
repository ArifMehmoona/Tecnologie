import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstonMartinComponent } from './aston-martin.component';

describe('AstonMartinComponent', () => {
  let component: AstonMartinComponent;
  let fixture: ComponentFixture<AstonMartinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AstonMartinComponent]
    });
    fixture = TestBed.createComponent(AstonMartinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
