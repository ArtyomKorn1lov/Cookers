import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../dto/recipe';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  private isAuthorised: boolean = false;
  private isRegistered: boolean = false;
  private readonly maxLength: number;
  private searchForm = this.formBuilder.group(
    {
      name: '',
    }
  );
  public pageId: number = null;
  public recipe : Recipe | undefined;
  public recipes: Recipe[] = [];

  constructor(private router: Router, private recipesService: RecipesService, private formBuilder: FormBuilder) 
  {
    this.maxLength = 151;
  }

  onAuthFormClick(): void
  {
    this.isAuthorised = true;
  }

  closeAuthForm(): void
  {
    this.isAuthorised = false;
  }

  onRegFormClick(): void
  {
    this.isRegistered = true;
  }

  closeRegForm(): void
  {
    this.isRegistered = false;
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

  onPushDataInServiceClick(): void
  {
    this.recipesService.pushIdInService(this.recipe.id);
  }

  ngOnInit() {
    this.pageId = 1;
    this.recipesService.getDayRecipe().subscribe(data => this.recipe = data);
  }

}
