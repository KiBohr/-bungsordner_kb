import { setHours } from "date-fns";
import { fi } from "date-fns/locale";

// console.log("testi test");

// ! LiveCoding                                     

// // * Tuple

// type Coordinates = [string, string]

// const coordinates: Coordinates = [`49° 0' 34" Nord,`,`8° 24' 15" Ost`];

// console.log(coordinates);

// // * Set

// const shoppinglist = new Set([
//     "Tofu",     
//     "Tomaten", 
//     "Gurke", 
//     "Litschis"]);


// // console.log("has Tofu");
// console.log(shoppinglist.has("Tofu"));

// shoppinglist.add("Papaya"); // added das angegebene Element
// shoppinglist.delete("Tofu"); // löscht das angegebene Element
// console.log(shoppinglist);

// const arrayWithDuplicateEntries = [1,2,9,2,3,1,999]
// // array zu Set --> löscht doppelte Werte
// const setFromArray = new Set(arrayWithDuplicateEntries)
// // Set zurück zu array:
// const duplicatedArray = [...setFromArray]

// // kürzere Schreibweise:
// const deduplicatedArray = [...new Set(arrayWithDuplicateEntries)]


// * Map

const mapSpeisekarte = new Map<number, string>()

mapSpeisekarte.set(1, "Pad Thai")
mapSpeisekarte.set(2, "Bratkartoffeln")
mapSpeisekarte.set(3, "Red Curry")

console.log(mapSpeisekarte)


// //Objekt zu Map
// const neueSpeiseKarte = {"Pizza": 10, "Wasser": 2, "Saft": 3}
// const andereNeueSpeisekarte = new Map(Object.entries(neueSpeiseKarte))
// console.log(Object.entries(andereNeueSpeisekarte))


// // * for ..of

// //?dasselbe wie:
// // shoppinglist.forEach((item)=>{})

// for(const item of shoppinglist){
//     if (item === "Tofu") {
//         console.log(`Jeah, item found!`);
//     break;    
//     }
// }

// // auch für Map möglich, --> key/ value Paar als Tupel (destructered)
// for (const [key, value] of mapSpeisekarte) {
//     console.log(key);
//     console.log(value);
// }

// //* Objekte und Identität

// const a = {name: "Alex"}
// const b = {name: "Alex"}

// console.log(a === b); // prüft nicht den Inhalt, sondern die Speicheradresse --> false

// // zwei Objekte gelten als verschieden, wenn sie nicht das gleiche Objekt sind, also nicht die selbe Speicheradresse haben

// const vermeintlicheKoopieVonA = a 
// vermeintlicheKoopieVonA.name = "Berti"

// // Object.assign erstellt ein neues Objekt und kopiert alle Eigenschaften von b dort hinein
// const tatsächlicheKopieVonB = Object.assign({}, b)

// //{...b} tut das selbe, ist aber kompakter
// const andereTatsächlicheKopieVonB = {...b}
// andereTatsächlicheKopieVonB.name = "Caesar";
// // oder 
// // const andereTatsächlicheKopieVonB = {...b, name: "Doris"}


// ! Übungen                                                            

// * Tuple-TS-Level-1_1

type RoleAndActor = [string, string]

const starWarsActor: RoleAndActor = ["Luke Skywalker", "Mark Hamill"]

// console.log(starWarsActor);

const starWarsActors : RoleAndActor[] = [
    ["Luke Skywalker", "Mark Hamill"],
    ["Darth Vader", "James Earl Jones"],
    ["Yoda", "Frank Oz"],
    ["Han Solo", "Harrison Ford"],
    ["Princess Leia", "Carrie Fisher"]
]

// console.log(starWarsActors);

const namestarwarsActors = starWarsActors.forEach((element)=>{

    const roleName = element[0]
    const actorName = element[1]

    console.log(`${actorName} spielt ${roleName}.`);
})

// * Tuple-TS-Level-2_1

type Verwaltung = [number, string, string, number]

const mitarbeitende: Verwaltung[] = [
    [1, "Albert A.", "Medien", 10],
    [2, "Berta B.", "Planung", 20],
    [3, "Cicelle C.", "HR", 30],
    [4, "Dennis D.", "Finanzen", 40],
    [5, "Eren E.", "Leitung", 50],
]
// console.log(mitarbeitende);

// * Set-TS-Level-1_1

const starWarsCharacters = new Set([
    "Luke Skywalker",
    "Darth Vader",
    "Obi Wan Kenobi"])

console.log(starWarsCharacters);

starWarsCharacters.add("Leia Organa")
console.log(starWarsCharacters);

starWarsCharacters.add("Leia Organa")
console.log(starWarsCharacters); //? geht nicht, weil ein Set keine zwei gleichen ELemente enthalten kann

// * Set-TS-Level-2_1

const marvelCharacters : string[] = [
    "Iron Man",
    "Captain America",
    "Thor",
    "Hulk",
    "Black Widow",
    "Spider Man",
]
console.log(marvelCharacters);

marvelCharacters.push("Iron Man")
marvelCharacters.push("Thor")
console.log(marvelCharacters);

const marvelCharactersSet = new Set(marvelCharacters)// ?löscht die doppelten Elemente
console.log(marvelCharactersSet); 

// * Map-TS-Level-1_1

const fiveFavouriteBands  = new Map<string, string[]>()

fiveFavouriteBands.set("Queen", ["Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"])
fiveFavouriteBands.set("U2", ["Bono", "The Edge", "Adam Clayton", "Larry Mullen Jr."])
fiveFavouriteBands.set("Pink Floyd", ["Roger Waters", "David Gilmour", "Nick Mason", "Richard Wright"])
fiveFavouriteBands.set("The Rolling Stones", ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"])
fiveFavouriteBands.set("Kiss", ["Gene Simmons", "Paul Stanley", "Ace Frehley", "Peter Criss"])

console.log(fiveFavouriteBands.size); // .size gives the amount of elements

// get the 
console.log(fiveFavouriteBands.get("Queen")); //"Freddie Mercury", "Brian May", "Roger Taylor", "John Deacon"

// get the last band member
const bandMembers = fiveFavouriteBands.get("Queen")

if (bandMembers) {
    const indexOFLastBandMember = bandMembers.lastIndexOf("John Deacon")
    console.log(bandMembers[indexOFLastBandMember]);
    console.log(bandMembers[bandMembers.length -1]); // als Alternative
}

//* Map-TS-Level-2_1

// console.log(fiveFavouriteBands.has("Metallica"));  // false, also nein, "Metallica" ist nicht vorhanden, schocker

fiveFavouriteBands.set("Queen", ["me", "myself", "I"])
// console.log(fiveFavouriteBands.get("Queen")); // alter Eintrag wird überschrieben ! mutiert


// * Map-TS-Level-3_1

//? function, die alle Mitglieder ausgibt, deren Namen länger als 12 Zeichen sind

const longerArtistName = fiveFavouriteBands.forEach((bandMembers)=>{
    if (bandMembers.length >= 12){
        console.log(bandMembers.length >= 12);
    }
})

for (const [band, [member]] of fiveFavouriteBands) {
    if(member.length >= 12) {
        console.log(`Band: ${band}, Member: ${member}, Length: ${member.length}`);
    }
}

// * Loops-TS-Level-1_4
//? for...of

const friendNames: string[] = [
    "Georg",
    "Anass",
    "Elaine",
    "Hakan",
    "Eric",
    "Kim",
    "Sergio",
]

for (const element of friendNames) {
    console.log(element);
}