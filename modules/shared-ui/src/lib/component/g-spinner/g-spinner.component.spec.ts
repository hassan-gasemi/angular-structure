import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GSpinnerComponent } from './g-spinner.component';

describe('GSpinnerComponent', () => {
  let component: GSpinnerComponent;
  let fixture: ComponentFixture<GSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GSpinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
