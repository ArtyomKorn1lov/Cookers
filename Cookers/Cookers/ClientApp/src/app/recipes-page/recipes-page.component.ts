import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {

  pageId: number = 3;

  constructor() { }

  returnPage(): number {
    return this.pageId;
  }

  ngOnInit() {
  }

}
