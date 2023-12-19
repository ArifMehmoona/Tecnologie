import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NissanComponent } from './nissan.component';

describe('NissanComponent', () => {
  let component: NissanComponent;
  let fixture: ComponentFixture<NissanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NissanComponent]
    });
    fixture = TestBed.createComponent(NissanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
