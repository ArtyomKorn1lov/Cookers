import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
  
  @Input() pageId: number;

  constructor() { }

  isPreviousPageMain(): boolean
  {
    if(this.pageId == 1)
    {
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

}
