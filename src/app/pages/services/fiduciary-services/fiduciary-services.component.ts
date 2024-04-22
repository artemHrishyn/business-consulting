import { Component, OnInit } from '@angular/core';
import { BusinessPotentialComponent } from '../../../components/business-potential/business-potential.component';
import { SetValueService } from '../../../services/setValue/set-value.service';

@Component({
  selector: 'bcs-fiduciary-services',
  standalone: true,
  imports: [
    BusinessPotentialComponent
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
