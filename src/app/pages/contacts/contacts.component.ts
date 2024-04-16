import { Component } from '@angular/core';
import { HeadCategoryComponent } from '../../components/head-category/head-category.component';
import { RequestFormComponent } from '../../components/request-form/request-form.component';

@Component({
  selector: 'bcs-contacts',
  standalone: true,
  imports: [
    HeadCategoryComponent,
    RequestFormComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
}
