import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../dto/recipe';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {

  private searchForm = this.formBuilder.group(
    {
      name: '',
    }
  );
  public pageId: number = 3;
  public recipes: Recipe[] = [];

  constructor(private router: Router, private recipesService: RecipesService, private formBuilder: FormBuilder) { }

  returnPage(): number {
    return this.pageId;
  }

  btnClick() {
    this.router.navigateByUrl('/addnewrecipe');
  }

  onSubmit()
  {
    this.recipes = null;
    this.recipesService.getRecipeByName(this.searchForm.value.name).subscribe(data => this.recipes = data);
  }

  searchByTag(name: string)
  {
    this.recipes = null;
    this.recipesService.getRecipeByTag(name).subscribe(data => this.recipes = data)
  }

  getRecipes(): void {
    this.recipesService.getSeveralRecipes().subscribe(data => this.recipes = data);
  }

  ngOnInit() {
    this.getRecipes();
  }

}
