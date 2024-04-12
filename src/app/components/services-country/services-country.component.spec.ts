import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesCountryComponent } from './services-country.component';

describe('ServicesCountryComponent', () => {
  let component: ServicesCountryComponent;
  let fixture: ComponentFixture<ServicesCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesCountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicesCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
