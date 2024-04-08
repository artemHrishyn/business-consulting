import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from './data.service';
import { DataServ } from '../../interfaces/dataServece.interfaces';

@Injectable({
  providedIn: 'root'
})

export class DataCollectionService {

  constructor(private dataService: DataService) {
    
  }
  public getDataServece(): Observable<DataServ[]> {
    return this.dataService.getData('service').pipe(
      map(data => {
        const globalService: DataServ[] = data as DataServ[];
        let allProduct: DataServ[] = globalService;
        return allProduct;
      })
    );
  }
}
