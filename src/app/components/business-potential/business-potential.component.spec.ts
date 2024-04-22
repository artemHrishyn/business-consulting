import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPotentialComponent } from './business-potential.component';

describe('BusinessPotentialComponent', () => {
  let component: BusinessPotentialComponent;
  let fixture: ComponentFixture<BusinessPotentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPotentialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessPotentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
