import { Component } from '@angular/core';
import { HeadCategoryComponent } from '../../components/head-category/head-category.component';
import { RouterModule } from '@angular/router';
import { ServicesCountryComponent } from '../../components/services-country/services-country.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bcs-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HeadCategoryComponent,
    ServicesCountryComponent
  ],
  templateUrl: './services.component.html',
  styleUrls: [
    './services.component.scss',
    './media.scss'
  ]
})
export class ServicesComponent {
}
