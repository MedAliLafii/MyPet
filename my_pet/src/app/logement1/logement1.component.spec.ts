import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logement1Component } from './logement1.component';

describe('Logement1Component', () => {
  let component: Logement1Component;
  let fixture: ComponentFixture<Logement1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Logement1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
