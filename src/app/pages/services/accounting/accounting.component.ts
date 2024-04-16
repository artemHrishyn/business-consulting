import { Component } from '@angular/core';
import { HeadCategoryComponent } from '../../../components/head-category/head-category.component';
import { ButSubmitComponent } from '../../../components/but-submit/but-submit.component';

@Component({
  selector: 'bcs-accounting',
  standalone: true,
  imports: [
    HeadCategoryComponent,
    ButSubmitComponent
  ],
  templateUrl: './accounting.component.html',
  styleUrl: './accounting.component.scss'
})
export class AccountingComponent {

}
