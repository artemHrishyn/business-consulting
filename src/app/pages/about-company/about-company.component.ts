import { Component } from '@angular/core';
import { HeadCategoryComponent } from '../../components/head-category/head-category.component';
import { GoUrlService } from '../../services/go to url/go-url.service';

@Component({
  selector: 'bcs-about-company',
  standalone: true,
  imports: [
    HeadCategoryComponent
  ],
  templateUrl: './about-company.component.html',
  styleUrls: [
    './about-company.component.scss',
    './media.scss'
  ]
})
export class AboutCompanyComponent {
  constructor(
    private goUrl: GoUrlService
  ){}
  
  public goToUrl(value: string)
  {
    this.goUrl.goToUrl(value);
  }
}
