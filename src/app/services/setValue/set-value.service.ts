import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SetValueService {
  private valueNew: string = '';

  getValue(): string{
    return this.valueNew;
  }

  setValue(value: string){
    this.valueNew = value;
  }
}
