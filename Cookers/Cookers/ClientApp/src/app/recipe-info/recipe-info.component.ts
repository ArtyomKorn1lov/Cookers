import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {

  public recipe: Recipe;
  public pageId: number = 4;
  routerLinkString: string;
  parentPageId: number;

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipesService) { }

  returnBackPageClick(): void
  {
    this.router.navigateByUrl(this.routerLinkString);
  }

  ngOnInit() 
  {
    this.recipeService.getStubbedCurrentRecipe().subscribe(data => this.recipe = data);
    this.route.params.subscribe(params => this.parentPageId = Number.parseInt(params['paramId']))
    switch (this.parentPageId)
    {
      case 1: 
        this.routerLinkString = '/';
        break;
      case 3:
        this.routerLinkString = '/recipes';
        break;
    }
  }

}
