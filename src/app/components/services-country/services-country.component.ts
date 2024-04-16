import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
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
export class ServicesCountryComponent implements OnInit {
  @Input() img: string = '';
  @Input() text: string = '';
  @Input() link: string = '';
  
  ngOnInit(): void {
    console.log(
      this.img + " | " + this.text + " | " + this.link
    );
  }
}