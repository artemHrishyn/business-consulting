import { Component } from '@angular/core';
import { GoUrlService } from '../../services/go to url/go-url.service';
import { HeadCategoryComponent } from '../../components/head-category/head-category.component';

@Component({
  selector: 'bcs-contacts',
  standalone: true,
  imports: [
    HeadCategoryComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
}
