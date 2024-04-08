import { Component } from '@angular/core';
import { DataCollectionService } from '../../services/firebase/data-collection.service';

@Component({
  selector: 'bcs-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent {
  constructor(
    private collectionService: DataCollectionService
  )
  {
    this.collectionService.getDataServece().subscribe((data: any) => {
      console.log(data);
    })
  }
}

