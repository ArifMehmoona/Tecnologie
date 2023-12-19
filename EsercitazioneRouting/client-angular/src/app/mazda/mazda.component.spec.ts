import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazdaComponent } from './mazda.component';

describe('MazdaComponent', () => {
  let component: MazdaComponent;
  let fixture: ComponentFixture<MazdaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MazdaComponent]
    });
    fixture = TestBed.createComponent(MazdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
