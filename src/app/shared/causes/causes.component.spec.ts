import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausesComponent } from './causes.component';

describe('CausesComponent', () => {
  let component: CausesComponent;
  let fixture: ComponentFixture<CausesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CausesComponent]
    });
    fixture = TestBed.createComponent(CausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
