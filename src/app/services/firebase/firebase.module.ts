import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionModule } from './connections/connection.module';
import { ApiService } from './api.service';
import { DataCollectionService } from './data-collection.service';
import { DataService } from './data.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ConnectionModule,
    ApiService,
    DataCollectionService,
    DataService
  ]
})
export class FirebaseModule { }
