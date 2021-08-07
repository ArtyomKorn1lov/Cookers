import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  public pageId: number = 2;

  constructor() { }

  returnPage(): number {
    return this.pageId;
  }

  ngOnInit() {
  }

}
