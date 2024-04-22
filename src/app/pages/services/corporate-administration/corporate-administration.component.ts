import { Component, OnInit } from '@angular/core';
import { HeadCategoryComponent } from '../../../components/head-category/head-category.component';
import { BusinessPotentialComponent } from '../../../components/business-potential/business-potential.component';
import { SetValueService } from '../../../services/setValue/set-value.service';

@Component({
  selector: 'bcs-corporate-administration',
  standalone: true,
  imports: [
    BusinessPotentialComponent
  ],
  templateUrl: './corporate-administration.component.html',
  styleUrl: './corporate-administration.component.scss'
})
export class CorporateAdministrationComponent implements OnInit {
  private value: string = 'Корпоративне адміністрування';

  constructor(
    public setValue: SetValueService){
  }
  
  ngOnInit(): void {
    this.setValue.setValue(this.value);
  }
}
