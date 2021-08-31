import { Tag } from "./tag";

export class UpdateTagDto implements Tag {
    id: number;
    name: string;
    recipeId: number;
    constructor(_name: string, _recipeId: number) {
      this.name = _name;
      this.recipeId = _recipeId;
    }
  }