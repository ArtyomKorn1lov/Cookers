import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { UpdateRecipeDto } from '../dto/updateRecipeDto';
import { UpdateIngredientDto } from '../dto/updateIngredientDto';
import { UpdateStepDto } from '../dto/updateStepDto';
import { UpdateTagDto } from '../dto/updateTagDto';
import { Recipe } from '../dto/recipe';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

  private targetRoute: string = '/';
  private recipeForm = this.formBuilder.group(
    {
      name: '',
      description: '',
      cookingTime: 15,
      personCount: 3,
    }
  );
  private tagForm = this.formBuilder.group(
    {
      tags: '',
    }
  );
  private recipeDto: UpdateRecipeDto = new UpdateRecipeDto();
  private stepsDto: UpdateStepDto[] = [];
  private ingredientsDto: UpdateIngredientDto[] = [];
  private tagsDto: UpdateTagDto[] = [];
  private imgFile: File = null;
  public pageId: number;

  constructor(private router: Router, private route: ActivatedRoute, private recipesService: RecipesService, private formBuilder: FormBuilder) { }

  upload(): void {
    document.getElementById("selectImage").click();
  }

  download(event): void {
    this.imgFile = event.target.files[0];
  }

  goToPreviousPage(): void {
    this.router.navigateByUrl(this.targetRoute);
  }

  addStep(): void {
    this.stepsDto.push(new UpdateStepDto('', ''));
  }

  removeStep(i: number): void {
    this.stepsDto.splice(i, 1);
  }

  addIngridient(): void {
    this.ingredientsDto.push(new UpdateIngredientDto('', ''));
  }

  removeIngredient(i: number): void {
    this.ingredientsDto.splice(i, 1);
  }

  addTag(): void {
    if (this.tagForm.value.tags !== '') {
      this.tagsDto.push(new UpdateTagDto(this.tagForm.value.tags));
      this.tagForm = this.formBuilder.group(
        {
          tags: '',
        }
      );
    }
  }

  removeTag(i: number): void {
    this.tagsDto.splice(i, 1);
  }

  onSubmit(): void {
    for (var i = 1; i <= this.stepsDto.length; i++) {
      this.stepsDto[i - 1].name = "Шаг" + i;
    }
    this.recipeDto.tags = this.tagsDto;
    this.recipeDto.name = this.recipeForm.value.name;
    this.recipeDto.description = this.recipeForm.value.description;
    this.recipeDto.cookingTime = this.recipeForm.value.cookingTime;
    this.recipeDto.personCount = this.recipeForm.value.personCount;
    this.recipeDto.photo = null;
    this.recipeDto.ingredients = this.ingredientsDto;
    this.recipeDto.steps = this.stepsDto;
    this.recipesService.updateRecipe(this.recipeDto).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  fillForm(): void {
    if (this.recipeDto.steps != null) {
      this.stepsDto = this.recipeDto.steps;
    }
    if (this.recipeDto.ingredients != null) {
      this.ingredientsDto = this.recipeDto.ingredients;
    }
    if (this.recipeDto.tags != null) {
      this.tagsDto = this.recipeDto.tags;
    }
    this.recipeForm = this.formBuilder.group(
      {
        name: this.recipeDto.name,
        description: this.recipeDto.description,
        cookingTime: this.recipeDto.cookingTime,
        personCount: this.recipeDto.personCount,
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.pageId = Number.parseInt(params['paramId']));
    this.recipeDto = this.recipesService.getCurrentRecipe();
    switch (this.pageId) {
      case 1:
        this.targetRoute = '/';
        break;
      case 4:
        this.targetRoute = '/recipeinfo';
        break;
    }
    this.stepsDto.push(new UpdateStepDto('', ''));
    this.ingredientsDto.push(new UpdateIngredientDto('', ''));
    this.fillForm();
  }
}
