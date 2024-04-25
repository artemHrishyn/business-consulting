import { Component, OnInit } from '@angular/core';
import { HeadCategoryComponent } from '../../../components/head-category/head-category.component';
import { BusinessPotentialComponent } from '../../../components/business-potential/business-potential.component';
import { SetValueService } from '../../../services/setValue/set-value.service';

@Component({
  selector: 'bcs-tax',
  standalone: true,
  imports: [
    BusinessPotentialComponent,
    HeadCategoryComponent
  ],
  templateUrl: './tax.component.html',
  styleUrl: './tax.component.scss'
})
export class TaxComponent implements OnInit {
  private value: string = 'Податкове консультування';

  constructor(
    public setValue: SetValueService){
  }
  
  ngOnInit(): void {
    this.setValue.setValue(this.value);
  }
}
