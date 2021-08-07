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

  private isAuthorised: boolean = false;
  private isRegistered: boolean = false;
  private readonly maxLength: number;
  public pageId: number = null;
  public recipes : Recipe[] = [];
  public recipe : Recipe | undefined;

  constructor(private router: Router, private recipesService: RecipesService) 
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
