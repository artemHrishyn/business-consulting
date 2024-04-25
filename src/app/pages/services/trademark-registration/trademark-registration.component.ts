import { Component, OnInit } from '@angular/core';
import { HeadCategoryComponent } from '../../../components/head-category/head-category.component';
import { BusinessPotentialComponent } from '../../../components/business-potential/business-potential.component';
import { SetValueService } from '../../../services/setValue/set-value.service';

@Component({
  selector: 'bcs-trademark-registration',
  standalone: true,
  imports: [
    BusinessPotentialComponent,
    HeadCategoryComponent
  ],
  templateUrl: './trademark-registration.component.html',
  styleUrl: './trademark-registration.component.scss'
})
export class TrademarkRegistrationComponent implements OnInit {
  private value: string = 'Trademark Registration';

  constructor(
    public setValue: SetValueService){
  }
  
  ngOnInit(): void {
    this.setValue.setValue(this.value);
  }
}
