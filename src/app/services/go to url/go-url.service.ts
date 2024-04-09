import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoUrlService {
  constructor(
    private routing: Router
  ) {}

  public goToUrl(value: string){
    this.routing.navigate([value]);
  }
}
