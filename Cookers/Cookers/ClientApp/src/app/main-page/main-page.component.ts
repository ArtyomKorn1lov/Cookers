import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { Recipe } from '../dto/recipe';

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
    this.recipesService.pushIdInService(this.recipe.id);
  }

  ngOnInit() {
    this.pageId = 1;
    this.recipesService.getDayRecipe().subscribe(data => this.recipe = data);
  }

}
