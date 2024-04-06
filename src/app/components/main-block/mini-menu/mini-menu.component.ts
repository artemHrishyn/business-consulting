import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bcs-mini-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './mini-menu.component.html',
  styleUrl: './mini-menu.component.scss'
})
export class MiniMenuComponent {
  @Output() closeEvent = new EventEmitter<boolean>();
  public isMenuOpen: boolean = false;

  public close(){
    this.closeEvent.emit(false);
  }
}