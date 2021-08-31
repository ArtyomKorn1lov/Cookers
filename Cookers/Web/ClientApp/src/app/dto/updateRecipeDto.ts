import { UpdateIngredientDto } from "./updateIngredientDto";
import { UpdateStepDto } from "./updateStepDto";
import { UpdateTagDto } from "./updateTagDto";
import { Recipe } from "./recipe";

export class UpdateRecipeDto implements Recipe {
    id: number;
    name: string;
    description?: string;
    photo?: string;
    cookingTime: number;
    personCount: number;
    favourites: number;
    likes: number;
    steps?: UpdateStepDto[];
    ingredients?: UpdateIngredientDto[];
    tags?: UpdateTagDto[];
}