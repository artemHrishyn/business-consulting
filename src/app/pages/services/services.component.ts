import { Component } from '@angular/core';
import { HeadCategoryComponent } from '../../components/head-category/head-category.component';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { ServicesCountryComponent } from '../../components/services-country/services-country.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bcs-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    HeadCategoryComponent,
    ServicesCountryComponent
  ],
  templateUrl: './services.component.html',
  styleUrls: [
    './services.component.scss',
    './media.scss'
  ]
})
export class ServicesComponent {
  public childComponentActive: boolean = false;
  public childrenValue: string = '';

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          this.childComponentActive = false;
        });
      }
    });
  }
  
  public onChildActivate() {
    setTimeout(() => {
      this.childComponentActive = true;
    });
  }
  
  public onChildDeactivate() {
    setTimeout(() => {
      this.childComponentActive = false;
    });
  }
}
