import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorscheComponent } from './porsche.component';

describe('PorscheComponent', () => {
  let component: PorscheComponent;
  let fixture: ComponentFixture<PorscheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorscheComponent]
    });
    fixture = TestBed.createComponent(PorscheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
