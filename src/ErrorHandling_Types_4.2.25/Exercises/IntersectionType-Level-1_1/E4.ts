// * IntersectionType-Level-1_1
console.warn("IntersectionType-Level-1_1");

export type Juice = {
  name: string;
  fruit: string;
};

export type Water = {
  name: string;
  carbonated: boolean;
};

// - intersection Type von beiden
export type Schorle = Juice & Water;

const apfelschorle: Schorle = {
  name: "apfelschorle",
  fruit: "apple",
  carbonated: true,
};

console.log(apfelschorle);
