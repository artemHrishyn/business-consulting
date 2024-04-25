import { Component, OnInit } from '@angular/core';
import { BusinessPotentialComponent } from '../../../components/business-potential/business-potential.component';
import { SetValueService } from '../../../services/setValue/set-value.service';
import { HeadCategoryComponent } from '../../../components/head-category/head-category.component';

@Component({
  selector: 'bcs-registration',
  standalone: true,
  imports: [
    BusinessPotentialComponent,
    HeadCategoryComponent
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {
  private value: string = 'Реєстрація компанії';

  constructor(
    public setValue: SetValueService){
  }
  
  ngOnInit(): void {
    this.setValue.setValue(this.value);
  }
}
