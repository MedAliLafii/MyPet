import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetDescRComponent } from './pet-desc-r.component';

describe('PetDescAComponent', () => {
  let component: PetDescRComponent;
  let fixture: ComponentFixture<PetDescRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetDescRComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetDescRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
