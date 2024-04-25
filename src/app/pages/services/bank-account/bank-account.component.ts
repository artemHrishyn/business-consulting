import { Component, OnInit } from '@angular/core';
import { BusinessPotentialComponent } from '../../../components/business-potential/business-potential.component';
import { SetValueService } from '../../../services/setValue/set-value.service';
import { HeadCategoryComponent } from '../../../components/head-category/head-category.component';

@Component({
  selector: 'bcs-bank-account',
  standalone: true,
  imports: [
    BusinessPotentialComponent,
    HeadCategoryComponent
  ],
  templateUrl: './bank-account.component.html',
  styleUrl: './bank-account.component.scss'
})
export class BankAccountComponent implements OnInit {
  private value: string = 'Відкриття банківського рахунку';

  constructor(
    public setValue: SetValueService){
  }
  
  ngOnInit(): void {
    this.setValue.setValue(this.value);
  }
}
