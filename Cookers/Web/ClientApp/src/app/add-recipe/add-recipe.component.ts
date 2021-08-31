import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { CreateRecipeDto } from '../dto/createRecipeDto';
import { CreateStepDto } from '../dto/createStepDto';
import { CreateIngredientDto } from '../dto/createIngredientDto';
import { CreateTagDto } from '../dto/createTagDto';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

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
  private recipe: CreateRecipeDto = new CreateRecipeDto();
  private steps: CreateStepDto[] = [];
  private ingredients: CreateIngredientDto[] = [];
  private tags: CreateTagDto[] = [];
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
    this.steps.push(new CreateStepDto('', ''));
  }

  removeStep(i: number): void {
    this.steps.splice(i, 1);
  }

  addIngredient(): void {
    this.ingredients.push(new CreateIngredientDto('', ''));
  }

  removeIngredient(i: number): void {
    this.ingredients.splice(i, 1);
  }

  addTag(): void {
    let str = this.tagForm.value.tags;
    if (str.trim() != '') {
      if (this.checkNameInTags(str) == 0) {
        this.tags.push(new CreateTagDto(this.tagForm.value.tags));
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
    this.recipesService.addRecipe(this.recipe).subscribe(x => console.log(x));
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

  ngOnInit() {
    this.route.params.subscribe(params => this.pageId = Number.parseInt(params['paramId']));
    switch (this.pageId) {
      case 1:
        this.targetRoute = '/';
        break;
      case 3:
        this.targetRoute = '/recipes';
        break;
    }
    this.steps.push(new CreateStepDto('', ''));
    this.ingredients.push(new CreateIngredientDto('', ''));
  }

}