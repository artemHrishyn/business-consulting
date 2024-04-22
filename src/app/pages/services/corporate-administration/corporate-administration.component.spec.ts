import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateAdministrationComponent } from './corporate-administration.component';

describe('CorporateAdministrationComponent', () => {
  let component: CorporateAdministrationComponent;
  let fixture: ComponentFixture<CorporateAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorporateAdministrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorporateAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
