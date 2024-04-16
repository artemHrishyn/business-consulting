import { Component } from '@angular/core';
import { ButSubmitComponent } from '../../../components/but-submit/but-submit.component';
import { HeadCategoryComponent } from '../../../components/head-category/head-category.component';

@Component({
  selector: 'bcs-registration',
  standalone: true,
  imports: [
    HeadCategoryComponent,
    ButSubmitComponent
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

}
