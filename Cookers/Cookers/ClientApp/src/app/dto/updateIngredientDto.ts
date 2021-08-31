import { Ingredient } from "./ingredient";

export class UpdateIngredientDto implements Ingredient {
    id: number;
    name: string;
    description?: string;
    recipeId: number;
    constructor(_name: string, _description: string, _recipeId: number) {
      this.name = _name;
      this.description = _description;
      this.recipeId = _recipeId;
    }
  }