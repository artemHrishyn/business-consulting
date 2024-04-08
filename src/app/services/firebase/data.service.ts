import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
    private api: ApiService
  ) { }

  // Отримка даних з серверу
  public getData(value: string){
    const data: string = `${this.api.source[`${value}`]}.json`;
    return this.http.get(data);
  }
}
