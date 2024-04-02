import { Component } from '@angular/core';
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
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public miniMenu: boolean = false;
  
  public menuActivate(){
    this.miniMenu = true;
  }
  
  close() {
    this.miniMenu = false;
  }
}
