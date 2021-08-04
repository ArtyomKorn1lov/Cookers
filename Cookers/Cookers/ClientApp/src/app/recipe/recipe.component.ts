import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Recipe, Ingredient, Step } from '../recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() parentPageId: number;

  constructor(private recipesService: RecipesService) { }

  onClick(): void
  {
    this.recipesService.pushDataInService(this.recipe);
  }

  ngOnInit() {
  }

}
