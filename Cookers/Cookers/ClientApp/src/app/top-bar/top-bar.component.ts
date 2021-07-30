import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  pageId: number = null;

  constructor() {
   }

  onClickMain(id: number)
  {
    switch(id)
    {
      case 1:
        this.pageId = 1;
        break;
      case 2:
        this.pageId = 2;
        break;
      case 3:
        this.pageId = 3;
        break;
    }
  }

  ngOnInit() {
    this.pageId = 1;
  }

}
