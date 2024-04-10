import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadCategoryComponent } from './head-category.component';

describe('HeadCategoryComponent', () => {
  let component: HeadCategoryComponent;
  let fixture: ComponentFixture<HeadCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
