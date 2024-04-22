import { Component, Input } from '@angular/core';
import { ButSubmitComponent } from '../but-submit/but-submit.component';

@Component({
  selector: 'bcs-services-country',
  standalone: true,
  imports: [
    ButSubmitComponent
  ],
  templateUrl: './services-country.component.html',
  styleUrl: './services-country.component.scss'
})
export class ServicesCountryComponent {
  @Input() img: string = '';
  @Input() text: string = '';
}