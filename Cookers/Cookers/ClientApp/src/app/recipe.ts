export interface Step {
    name: string;
    description: string;
}

export interface Ingredient {
    name: string;
    descriptions: string[];
}

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