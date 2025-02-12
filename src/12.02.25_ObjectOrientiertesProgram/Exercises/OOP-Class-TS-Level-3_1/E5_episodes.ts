import { Actor, actors } from "./E5_actors";

//? class "epsiode"
export class Episode {
  title: string;
  length: number;
  description: string;
  actors: Actor[];

  constructor(
    title: string,
    length: number,
    description: string,
    actors: Actor[]
  ) {
    this.title = title;
    this.length = length;
    this.description = description;
    this.actors = actors;
  }
}
// ? create Episode

export const Introduction = new Episode(
  "Introduction",
  30,
  "Poppys struggle is introduced",
  [actors[0], actors[1], actors[2]]
);
