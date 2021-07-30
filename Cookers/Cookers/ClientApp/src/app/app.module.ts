import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FotBarComponent } from './fot-bar/fot-bar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { RecipesPageComponent } from './recipes-page/recipes-page.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AuthorizationComponent } from './authorization/authorization.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FotBarComponent,
    MainPageComponent,
    TagListComponent,
    RecipesPageComponent,
    FavoritesPageComponent,
    AddRecipeComponent,
    RecipeComponent,
    AuthorizationComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainPageComponent },
      { path: 'recipes', component:  RecipesPageComponent },
      { path: 'favorites', component:  FavoritesPageComponent },
      { path: 'addnewrecipe', component:  AddRecipeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
