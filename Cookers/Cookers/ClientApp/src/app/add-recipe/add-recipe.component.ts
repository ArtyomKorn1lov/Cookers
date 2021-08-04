import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  pageId: number;
  targetRoute: string = '/recipes';

  constructor(private router: Router, private route: ActivatedRoute) { }

  returnBackPageClick(): void
  {
    this.router.navigateByUrl(this.targetRoute);
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.pageId = Number.parseInt(params['paramId']))
    switch (this.pageId)
    {
      case 1: 
        this.targetRoute = '/';
        break;
      case 3:
        this.targetRoute = '/recipes';
        break;
    }
  }

}
