import { Step } from "./step";
import { Ingredient } from "./ingredient";
import { Tag } from "./tag";

export interface Recipe {
    id: number;
    name: string;
    description?: string;
    photo?: string;
    cookingTime: number;
    personCount: number;
    favourites: number;
    likes: number;
    steps?: Step[];
    ingredients?: Ingredient[];
    tags?: Tag[];
}