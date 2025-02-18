import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logement2Component } from './logement2.component';

describe('Logement2Component', () => {
  let component: Logement2Component;
  let fixture: ComponentFixture<Logement2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Logement2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Logement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
