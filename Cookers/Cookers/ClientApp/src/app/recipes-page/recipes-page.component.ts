import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe, RecipesService, Ingredient, Step } from '../recipes.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {

  pageId: number = 3;

  recipes : Recipe[] | undefined;

  constructor(private router: Router, private recipesService: RecipesService) { }

  returnPage(): number 
  {
    return this.pageId;
  }

  btnClick()
  {
      this.router.navigateByUrl('/addnewrecipe');
  }

  getRecipes(): void
  {
    this.recipesService.getStubbedInfo().subscribe(data => this.recipes = data);
  }

  ngOnInit() 
  {
    this.getRecipes();
  }

}
