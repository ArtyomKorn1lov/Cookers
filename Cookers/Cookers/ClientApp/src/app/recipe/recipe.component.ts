import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {

  @Input() recipe: Recipe;
  @Input() parentPageId: number;
  private readonly maxLength: number;

  constructor(private recipesService: RecipesService) 
  {
    this.maxLength = 151;
  }

  onPushDataInServiceClick(): void
  {
    this.recipesService.pushDataInService(this.recipe);
  }

}
