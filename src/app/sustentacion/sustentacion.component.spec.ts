import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustentacionComponent } from './sustentacion.component';

describe('SustentacionComponent', () => {
  let component: SustentacionComponent;
  let fixture: ComponentFixture<SustentacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SustentacionComponent]
    });
    fixture = TestBed.createComponent(SustentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
