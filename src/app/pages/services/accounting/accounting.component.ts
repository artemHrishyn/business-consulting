import { Component, OnInit } from '@angular/core';
import { BusinessPotentialComponent } from '../../../components/business-potential/business-potential.component';
import { SetValueService } from '../../../services/setValue/set-value.service';
import { HeadCategoryComponent } from '../../../components/head-category/head-category.component';

@Component({
  selector: 'bcs-accounting',
  standalone: true,
  imports: [
    BusinessPotentialComponent,
    HeadCategoryComponent
  ],
  templateUrl: './accounting.component.html',
  styleUrl: './accounting.component.scss'
})
export class AccountingComponent implements OnInit {
  private value: string = 'Облік';

  constructor(
    public setValue: SetValueService){
  }
  
  ngOnInit(): void {
    this.setValue.setValue(this.value);
  }

}
