import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElSecundoComponent } from './el-secundo.component';

describe('ElSecundoComponent', () => {
  let component: ElSecundoComponent;
  let fixture: ComponentFixture<ElSecundoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElSecundoComponent]
    });
    fixture = TestBed.createComponent(ElSecundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
