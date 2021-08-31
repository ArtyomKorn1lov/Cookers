import { CreateIngredientDto } from "./createIngredientDto";
import { CreateStepDto } from "./createStepDto";
import { CreateTagDto } from "./createTagDto";

export class CreateRecipeDto {
    name: string;
    description?: string;
    photo?: string;
    cookingTime: number;
    personCount: number;
    steps?: CreateStepDto[];
    ingredients?: CreateIngredientDto[];
    tags?: CreateTagDto[];
}