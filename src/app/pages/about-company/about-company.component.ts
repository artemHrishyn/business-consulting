import { Component } from '@angular/core';
import { HeadCategoryComponent } from '../../components/head-category/head-category.component';

@Component({
  selector: 'bcs-about-company',
  standalone: true,
  imports: [
    HeadCategoryComponent
  ],
  templateUrl: './about-company.component.html',
  styleUrl: './about-company.component.scss'
})
export class AboutCompanyComponent {

}
