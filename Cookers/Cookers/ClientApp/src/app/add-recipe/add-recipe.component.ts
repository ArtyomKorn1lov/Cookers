import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../services/recipes.service';
import { CreateRecipeDto } from '../dto/createRecipeDto';
import { CreateStepDto } from '../dto/createStepDto';
import { CreateIngredientDto } from '../dto/createIngredientDto';
import { CreateTagDto } from '../dto/createTagDto';
import { ImageService } from '../services/image.service';

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
  private recipeDto: CreateRecipeDto = new CreateRecipeDto();
  private stepsDto: CreateStepDto[] = [];
  private ingredientsDto: CreateIngredientDto[] = [];
  private tagsDto: CreateTagDto[] = [];
  private imgFile: File = null;
  private imgUrl: string = null;
  public pageId: number;

  constructor(private router: Router, private route: ActivatedRoute, private recipesService: RecipesService, private formBuilder: FormBuilder, private imageServeice: ImageService) { }

  upload(): void {
    document.getElementById("selectImage").click();
  }

  download(event): void {
    this.imgFile = event.target.files[0];
    this.imageServeice.uploadImage(this.imgFile).subscribe(x => this.imgUrl = x );
    console.log(this.imgUrl);
  }

  goToPreviousPage(): void {
    this.router.navigateByUrl(this.targetRoute);
  }

  addStep(): void {
    this.stepsDto.push(new CreateStepDto('', ''));
  }

  removeStep(i: number): void {
    this.stepsDto.splice(i, 1);
  }

  addIngridient(): void {
    this.ingredientsDto.push(new CreateIngredientDto('', ''));
  }

  removeIngredient(i: number): void {
    this.ingredientsDto.splice(i, 1);
  }

  addTag(): void {
    let str = this.tagForm.value.tags;
    if (str.trim() != '') {
      if (this.checkNameInTags(str) == 0) {
        this.tagsDto.push(new CreateTagDto(this.tagForm.value.tags));
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
    for (let tag of this.tagsDto) {
      if (tag.name == name) {
        count++;
      }
    }
    return count;
  }

  removeTag(i: number): void {
    this.tagsDto.splice(i, 1);
  }

  onSubmit(): void {
    let name = this.recipeForm.value.name;
    var count = this.checkNameInIngredient();
    console.log(name, count);
    if (name.trim() == '') {
      alert("Введите все поля, обязательные для заполнения");
      return;
    }
    for (var i = 1; i <= this.stepsDto.length; i++) {
      this.stepsDto[i - 1].name = "Шаг " + i;
    }
    this.recipeDto.tags = this.tagsDto;
    this.recipeDto.name = this.recipeForm.value.name;
    this.recipeDto.description = this.recipeForm.value.description;
    this.recipeDto.cookingTime = this.recipeForm.value.cookingTime;
    this.recipeDto.personCount = this.recipeForm.value.personCount;
    this.recipeDto.photo = null;
    this.recipeDto.ingredients = this.ingredientsDto;
    this.recipeDto.steps = this.stepsDto;
    this.recipesService.addRecipe(this.recipeDto).subscribe(x => console.log(x));
    this.router.navigateByUrl(this.targetRoute);
  }

  checkNameInIngredient(): number {
    var count = 0;
    let str;
    for (let step of this.stepsDto) {
      str = step.name;
      console.log(str);
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
    this.stepsDto.push(new CreateStepDto('', ''));
    this.ingredientsDto.push(new CreateIngredientDto('', ''));
  }

}