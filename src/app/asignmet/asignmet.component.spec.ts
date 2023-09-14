import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignmetComponent } from './asignmet.component';

describe('AsignmetComponent', () => {
  let component: AsignmetComponent;
  let fixture: ComponentFixture<AsignmetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignmetComponent]
    });
    fixture = TestBed.createComponent(AsignmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
