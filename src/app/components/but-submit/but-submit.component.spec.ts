import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButSubmitComponent } from './but-submit.component';

describe('ButSubmitComponent', () => {
  let component: ButSubmitComponent;
  let fixture: ComponentFixture<ButSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButSubmitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
