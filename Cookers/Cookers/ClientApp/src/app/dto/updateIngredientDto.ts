import { Ingredient } from "./ingredient";

export class UpdateIngredientDto implements Ingredient {
    id: number;
    name: string;
    description?: string;
    constructor(_name: string, _description: string) {
      this.name = _name;
      this.description = _description;
    }
  }