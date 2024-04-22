import { AfterContentChecked, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { GoUrlService } from '../../services/go to url/go-url.service';
import { CommonModule } from '@angular/common';
import { SetValueService } from '../../services/setValue/set-value.service';

@Component({
  selector: 'bcs-head-category',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './head-category.component.html',
  styleUrl: './head-category.component.scss'
})
export class HeadCategoryComponent implements OnInit, AfterContentChecked {
  @Input() category: string = '';
  public children: string = '';
  public isChildren: boolean = false;

  constructor(
    private goUrl: GoUrlService,
    public setValue: SetValueService
  ){}
  
  ngOnInit(): void {
    this.isChildren = this.setValue.getValue() != '';
  }

  ngAfterContentChecked(): void {
    this.isChildren = this.setValue.getValue() != '';
    this.children = this.setValue.getValue();
  }

  public goToUrl(value: string)
  {
    if(value == 'main'){
      this.goUrl.goToUrl(value);
    }
    else{
      if(this.category == 'Наші послуги'){
        this.goUrl.goToUrl('services');
        this.setValue.setValue('');
      }
    }
  }
}
