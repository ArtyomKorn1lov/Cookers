import { Tag } from "./tag";

export class UpdateTagDto implements Tag {
    id: number;
    name: string;
    constructor(_name: string) {
      this.name = _name;
    }
  }