import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetDescAComponent } from './pet-desc-a.component';

describe('PetDescAComponent', () => {
  let component: PetDescAComponent;
  let fixture: ComponentFixture<PetDescAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDescAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetDescAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
