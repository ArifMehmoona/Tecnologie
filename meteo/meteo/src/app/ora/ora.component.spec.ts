import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OraComponent } from './ora.component';

describe('OraComponent', () => {
  let component: OraComponent;
  let fixture: ComponentFixture<OraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
