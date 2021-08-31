import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { UpdateRecipeDto } from '../dto/updateRecipeDto';
import { UpdateIngredientDto } from '../dto/updateIngredientDto';
import { UpdateStepDto } from '../dto/updateStepDto';
import { UpdateTagDto } from '../dto/updateTagDto';

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
  private recipe: UpdateRecipeDto = new UpdateRecipeDto();
  private steps: UpdateStepDto[] = [];
  private ingredients: UpdateIngredientDto[] = [];
  private tags: UpdateTagDto[] = [];
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
    this.steps.push(new UpdateStepDto('', '', this.recipe.id));
  }

  removeStep(i: number): void {
    this.steps.splice(i, 1);
  }

  addIngredient(): void {
    this.ingredients.push(new UpdateIngredientDto('', '', this.recipe.id));
  }

  removeIngredient(i: number): void {
    this.ingredients.splice(i, 1);
  }

  addTag(): void {
    let str = this.tagForm.value.tags;
    if (str.trim() != '') {
      if (this.checkNameInTags(str) == 0) {
        this.tags.push(new UpdateTagDto(this.tagForm.value.tags, this.recipe.id));
      }
    }
    this.tagForm = this.formBuilder.group(
      {
        tags: '',
      }
    );
  }

  checkNameInTags(name: string): number {
    var count = 0;
    for (let tag of this.tags) {
      if (tag.name == name) {
        count++;
      }
    }
    return count;
  }

  removeTag(i: number): void {
    this.tags.splice(i, 1);
  }

  onSubmit(): void {
    let name = this.recipeForm.value.name;
    var count = this.checkNameInIngredient();
    if (name.trim() == '') {
      alert("Введите все поля, обязательные для заполнения");
      return;
    }
    for (var i = 1; i <= this.steps.length; i++) {
      this.steps[i - 1].name = this.createStepName(i);
    }
    this.recipe.tags = this.tags;
    this.recipe.name = this.recipeForm.value.name;
    this.recipe.description = this.recipeForm.value.description;
    this.recipe.cookingTime = this.recipeForm.value.cookingTime;
    this.recipe.personCount = this.recipeForm.value.personCount;
    this.recipe.photo = null;
    this.recipe.ingredients = this.ingredients;
    this.recipe.steps = this.steps;
    this.recipesService.updateRecipe(this.recipe).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  createStepName(i: number): string
  {
    return "Шаг " + i;
  }

  checkNameInIngredient(): number {
    var count = 0;
    let str;
    for (let step of this.steps) {
      str = step.name;
      if (str.trim() == '') {
        count++;
      }
    }
    return count;
  }

  fillForm(): void {
    if (this.recipe.steps != null) {
      this.steps = this.recipe.steps;
    }
    if (this.recipe.ingredients != null) {
      this.ingredients = this.recipe.ingredients;
    }
    if (this.recipe.tags != null) {
      this.tags = this.recipe.tags;
    }
    this.recipeForm = this.formBuilder.group(
      {
        name: this.recipe.name,
        description: this.recipe.description,
        cookingTime: this.recipe.cookingTime,
        personCount: this.recipe.personCount,
      }
    );
  }

  ngOnInit() {
    this.route.params.subscribe(params => this.pageId = Number.parseInt(params['paramId']));
    this.recipe = this.recipesService.getCurrentRecipe();
    switch (this.pageId) {
      case 1:
        this.targetRoute = '/';
        break;
      case 4:
        this.targetRoute = '/recipeinfo';
        break;
    }
    this.steps.push(new UpdateStepDto('', '', this.recipe.id));
    this.ingredients.push(new UpdateIngredientDto('', '', this.recipe.id));
    this.fillForm();
  }
}
