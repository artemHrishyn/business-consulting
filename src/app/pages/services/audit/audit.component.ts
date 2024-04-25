import { Component, OnInit } from '@angular/core';
import { BusinessPotentialComponent } from '../../../components/business-potential/business-potential.component';
import { SetValueService } from '../../../services/setValue/set-value.service';
import { HeadCategoryComponent } from '../../../components/head-category/head-category.component';

@Component({
  selector: 'bcs-audit',
  standalone: true,
  imports: [
    BusinessPotentialComponent,
    HeadCategoryComponent
  ],
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.scss'
})
export class AuditComponent implements OnInit {
  private value: string = 'Аудит';

  constructor(
    public setValue: SetValueService){
  }
  
  ngOnInit(): void {
    this.setValue.setValue(this.value);
  }
}
