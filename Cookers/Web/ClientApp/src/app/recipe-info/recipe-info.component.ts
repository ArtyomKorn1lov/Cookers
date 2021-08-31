import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../dto/recipe';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {

  public recipe: Recipe;
  public pageId: number = 4;
  private targetRoute: string = '/';
  private parentPageId: number;

  constructor(private router: Router, private route: ActivatedRoute, private recipeService: RecipesService) { }

  returnBackPageClick(): void
  {
    this.router.navigateByUrl(this.targetRoute);
  }

  deleteRecipe(): void
  {
    this.recipeService.removeRecipe(this.recipeService.getRecipeId()).subscribe( x => console.log(x) );
    this.router.navigateByUrl(this.targetRoute);
  }

  onPushDataInServiceClick(): void
  {
    this.recipeService.pushIdInService(this.recipe.id);
    this.recipeService.pushReccipeInService(this.recipe);
  }

  ngOnInit() 
  {
    this.recipeService.getRecipeById(this.recipeService.getRecipeId()).subscribe(data => this.recipe = data);
    this.route.params.subscribe(params => this.parentPageId = Number.parseInt(params['paramId']));
    switch (this.parentPageId)
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
