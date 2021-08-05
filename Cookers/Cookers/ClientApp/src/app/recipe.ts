import { Step } from "./step";
import { Ingredient } from "./ingredient";

export interface Recipe {
    id: number;
    name: string;
    description: string;
    photo: string;
    cookingTime: number;
    peoples: number;
    favorites: number;
    likes: number;
    steps: Step[];
    ingridients: Ingredient[];
}