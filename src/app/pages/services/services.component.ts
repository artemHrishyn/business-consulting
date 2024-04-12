import { Component } from '@angular/core';
import { HeadCategoryComponent } from '../../components/head-category/head-category.component';
import { ServicesCountryComponent } from '../../components/services-country/services-country.component';

@Component({
  selector: 'bcs-services',
  standalone: true,
  imports: [
    HeadCategoryComponent,
    ServicesCountryComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
