import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCompanyComponent } from './about-company.component';

describe('AboutCompanyComponent', () => {
  let component: AboutCompanyComponent;
  let fixture: ComponentFixture<AboutCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutCompanyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
