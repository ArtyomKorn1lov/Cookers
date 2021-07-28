import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RecipesService, Ingredient, Step } from '../recipes.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public pageId: number = null;
  recipes : Recipe[] | undefined;
  recipe : Recipe | undefined;

  constructor(private router: Router, private recipesService: RecipesService) { }

  btnClick()
  {
      this.router.navigateByUrl("['/addnewrecipe', {'paramId': this.pageId}]");
  }

  getRecipes(): void
  {
    this.recipesService.getStubbedInfo().subscribe(data => this.recipes = data);
    this.recipe = this.recipes[0]; 
    for(let item of this.recipes)
    {
      if(this.recipe.likes < item.likes)
      {
        this.recipe = item;
      }
    }
  }

  ngOnInit() {
    this.pageId = 1;
    this.getRecipes()
  }

}
