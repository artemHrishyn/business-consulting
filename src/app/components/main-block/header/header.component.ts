import { Component, HostListener } from '@angular/core';
import { MiniMenuComponent } from '../mini-menu/mini-menu.component';
import { CommonModule } from '@angular/common';

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
  public isListVisible: boolean = true
  
  public menuActivate(){
    this.miniMenu = true;
  }
  
  close() {
    this.miniMenu = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isListVisible = window.innerWidth >= 1200;
  }
}
