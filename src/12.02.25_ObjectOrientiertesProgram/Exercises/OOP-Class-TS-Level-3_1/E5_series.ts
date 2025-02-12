import { Episode, Introduction } from "./E5_episodes";
// * OOP-Class-TS-Level-3_1
console.warn("OOP-Class-TS-Level-3_1");
//  ? https://supercode.notion.site/OOP-Class-TS-Level-3_1-3ca6287746f24d379431972cfd0be37b

// ? class  "series"
export class Series {
  title: string;
  description: string;
  startYear: number;
  endYear: number;
  episodes: Episode[];

  constructor(
    title: string,
    description: string,
    startYear: number,
    endYear: number,
    episodes: Episode[]
  ) {
    this.title = title;
    this.description = description;
    this.startYear = startYear;
    this.endYear = endYear;
    this.episodes = episodes;
  }
}

//? create Series
const WildChild = new Series(
  "Wild Child",
  "Poppy More gets send to an english school and overcomes with help of new friends her emotional trauma",
  2007,
  2008,
  [Introduction]
);

console.log(WildChild);
