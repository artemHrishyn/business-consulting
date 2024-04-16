import { Component } from '@angular/core';
import { HeadCategoryComponent } from '../../../components/head-category/head-category.component';
import { ButSubmitComponent } from '../../../components/but-submit/but-submit.component';

@Component({
  selector: 'bcs-audit',
  standalone: true,
  imports: [
    HeadCategoryComponent,
    ButSubmitComponent
  ],
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.scss'
})
export class AuditComponent {

}
