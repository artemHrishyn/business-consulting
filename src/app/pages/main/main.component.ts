import { Component, OnInit } from '@angular/core';
import { DataCollectionService } from '../../services/firebase/data-collection.service';
import { DataServ } from '../../interfaces/dataServece.interfaces';
import { CommonModule } from '@angular/common';
import { RequestFormComponent } from '../../components/request-form/request-form.component';

@Component({
  selector: 'bcs-main',
  standalone: true,
  imports: [
    CommonModule,
    RequestFormComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: [
    './main.component.scss',
    './up.scss',
    './service.scss',
    './media.scss'
  ]
})

export class MainComponent implements OnInit {

  public dataServ: DataServ[] = [];
  public image: string = '';
  public title: string = '';
  public text: string = '';

  constructor(
    private collectionService: DataCollectionService
  ){}
  ngOnInit(): void {
    this.collectionService.getDataServece().subscribe((data: DataServ[]) => {
      this.dataServ = data;

      this.image = data[0].image;
      this.title = data[0].title;
      this.text = data[0].text
      data.forEach((elem: DataServ) => {
      });
    })
  }

  public clickService(value: DataServ){
    console.log(value);
    this.image = value.image;
    this.title = value.title;
    this.text = value.text;
  }
}

