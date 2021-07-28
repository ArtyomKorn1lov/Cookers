import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  pageId: number;
  routerLinkString: string = '/recipes';

  constructor(private router: Router, private route: ActivatedRoute) { }

  btnClick(): void
  {
    this.router.navigateByUrl(this.routerLinkString);
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.pageId = Number.parseInt(params['paramId']))
    switch (this.pageId)
    {
      case 1: 
        this.routerLinkString = '/';
        console.log(this.routerLinkString);
        break;
      case 2:
        this.routerLinkString = '/recipes';
    }
  }

}
