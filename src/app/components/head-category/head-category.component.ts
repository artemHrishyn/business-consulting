import { Component } from '@angular/core';
import { GoUrlService } from '../../services/go to url/go-url.service';

@Component({
  selector: 'bcs-head-category',
  standalone: true,
  imports: [],
  templateUrl: './head-category.component.html',
  styleUrl: './head-category.component.scss'
})
export class HeadCategoryComponent {
  constructor(
    private goUrl: GoUrlService
  ){}
  
  public goToUrl(value: string)
  {
    this.goUrl.goToUrl(value);
  }
}
