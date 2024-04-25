import { Component, HostListener } from '@angular/core';
import { MiniMenuComponent } from '../mini-menu/mini-menu.component';
import { CommonModule } from '@angular/common';
import { GoUrlService } from '../../../services/go to url/go-url.service';

@Component({
  selector: 'bcs-header',
  standalone: true,
  imports: [
    CommonModule,
    MiniMenuComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.scss',
    './media.scss'
  ]
})
export class HeaderComponent {
  public miniMenu: boolean = false;
  public isListVisible: boolean = true;

  constructor(
    private goUrl: GoUrlService
  ){}
  
  public menuActivate(){
    this.miniMenu = true;
  }
  
  close() {
    this.miniMenu = false;
  }

  public GoUrls(){
    this.goUrl.goToUrl('');
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isListVisible = window.innerWidth >= 1200;
  }
}
