import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService} from '../recipes.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public pageId: number = null;
  recipes : Recipe[] = [];
  recipe : Recipe | undefined;
  public buttonAuthState: boolean = false;
  public buttonRegState: boolean = false;
  private readonly maxLength: number;

  constructor(private router: Router, private recipesService: RecipesService) 
  {
    this.maxLength = 151;
  }

  onAuthFormClick(): void
  {
    this.buttonAuthState = true;
  }

  closeAuthForm(): void
  {
    this.buttonAuthState = false;
  }

  onRegFormClick(): void
  {
    this.buttonRegState = true;
  }

  closeRegForm(): void
  {
    this.buttonRegState = false;
  }

  onPushDataInServiceClick(): void
  {
    this.recipesService.pushDataInService(this.recipe);
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
