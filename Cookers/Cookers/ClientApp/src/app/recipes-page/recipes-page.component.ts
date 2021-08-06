import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {

  public pageId: number = 3;
  public recipes : Recipe[] = [];

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
