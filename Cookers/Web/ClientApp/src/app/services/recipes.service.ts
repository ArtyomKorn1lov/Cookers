import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../dto/recipe';
import { CreateRecipeDto } from '../dto/createRecipeDto';
import { UpdateRecipeDto } from '../dto/updateRecipeDto';

@Injectable({
    providedIn: 'root'
})

export class RecipesService {
    private currentRecipe: Recipe;
    private Id: number;
    private commonUri: string = 'api/recipe';

    constructor(private http: HttpClient) { }

    pushIdInService(id: number): void {
        this.Id = id;
    }

    pushReccipeInService(recipe: Recipe) {
        this.currentRecipe = recipe;
    }

    getRecipeId(): number {
        return this.Id;
    }

    getCurrentRecipe(): Recipe
    {
        return this.currentRecipe;
    }

    getSeveralRecipes(): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${this.commonUri}/by-count/${10}`);
    }

    getDayRecipe(): Observable<Recipe> {
        return this.http.get<Recipe>(`${this.commonUri}/of-day`);
    }

    addRecipe(recipe: CreateRecipeDto): Observable<object> {
        return this.http.post<Recipe>(`api/recipe`, recipe);
    }

    getRecipeById(id: number): Observable<Recipe> {
        return this.http.get<Recipe>(`api/recipe/${id}`);
    }

    getRecipeByTag(tag: string): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${this.commonUri}/by-tag/${tag}`);
    }

    getRecipeByName(name: string): Observable<Recipe[]> {
        return this.http.get<Recipe[]>(`${this.commonUri}/by-name/${name}`);
    }

    updateRecipe(recipe: UpdateRecipeDto): Observable<object> {
        return this.http.put<Recipe>(`${this.commonUri}`, recipe);
    }

    removeRecipe(id: number): Observable<object> {
        return this.http.delete<Recipe>(`${this.commonUri}/${id}`);
    }
}
