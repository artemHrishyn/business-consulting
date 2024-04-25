import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoUrlService } from '../../../services/go to url/go-url.service';

@Component({
  selector: 'bcs-footer',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrls: [
    './footer.component.scss',
    './media.scss'
  ]
})
export class FooterComponent {
  
  constructor(
    private goUrl: GoUrlService
  ){}
  
  public GoUrls(){
    this.goUrl.goToUrl('');
  }
}
