import { Component } from '@angular/core';
import { GoUrlService } from '../../services/go to url/go-url.service';

@Component({
  selector: 'bcs-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  constructor(
    private goUrl: GoUrlService
  ){}
  
  public goToUrl()
  {
    this.goUrl.goToUrl('');
  }
}
