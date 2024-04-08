import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainBlockModule } from './components/main-block/main-block.module';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseModule } from './services/firebase/firebase.module';

@Component({
  selector: 'bcs-root',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    RouterOutlet,
    MainBlockModule,
    FirebaseModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
