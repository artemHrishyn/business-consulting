import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainBlockModule } from './components/main-block/main-block.module';

@Component({
  selector: 'bcs-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MainBlockModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'business-consulting';
}
