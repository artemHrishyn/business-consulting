import { Component, OnInit } from '@angular/core';
import { BusinessPotentialComponent } from '../../../components/business-potential/business-potential.component';
import { SetValueService } from '../../../services/setValue/set-value.service';
import { HeadCategoryComponent } from '../../../components/head-category/head-category.component';

@Component({
  selector: 'bcs-fiduciary-services',
  standalone: true,
  imports: [
    BusinessPotentialComponent,
    HeadCategoryComponent
  ],
  templateUrl: './fiduciary-services.component.html',
  styleUrl: './fiduciary-services.component.scss'
})
export class FiduciaryServicesComponent implements OnInit {
  private value: string = 'Фідуціарні послуги';

  constructor(
    public setValue: SetValueService){
  }
  
  ngOnInit(): void {
    this.setValue.setValue(this.value);
  }
}
