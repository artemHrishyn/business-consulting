import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiduciaryServicesComponent } from './fiduciary-services.component';

describe('FiduciaryServicesComponent', () => {
  let component: FiduciaryServicesComponent;
  let fixture: ComponentFixture<FiduciaryServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiduciaryServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiduciaryServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
