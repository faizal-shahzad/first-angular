import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DipartmentComponent } from './dipartment.component';

describe('DipartmentComponent', () => {
  let component: DipartmentComponent;
  let fixture: ComponentFixture<DipartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DipartmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DipartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
