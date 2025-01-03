console.log("gumo");

// ! LiveCoding                     

// // * Methods

// // ? sort()
// const beispielWorte = ["Reiher", "Rabe", "Krähe", "Ente", "Gans", "Schwan", "Elster",]

// beispielWorte.sort() // sortiert aufsteigend alphabetisch
// console.log(beispielWorte.sort());

// const beispielZahlen = [2, 22, 9, 8, 100, 222]
// console.log(beispielZahlen);

// //? reverese()
// const beispielWorteReversed = [...beispielWorte].reverse()
// console.log(beispielWorteReversed);


// //? indexOf()
// const schwanIndex = beispielWorte.indexOf("Schwan")
// console.log(schwanIndex);

// //? includes()
// beispielWorte.includes("Reiher")
// console.log(beispielWorte.includes("Reiher"));

// //? find()

// beispielWorte.find((element) => {
//     if (element.length === 5) {
//         return true;
//     } else {
//         return false;
//     }
// });

// //? map()

// const numbersAsStrings = ["12", "2000", "9", "5.4"]
// const numbersAsNumbers = numbersAsStrings.map(parseFloat)
// console.log(numbersAsStrings);
// console.log(numbersAsNumbers);

// function double(num: number){
//     return num * 2;
// }

// const doubledNumbers = numbersAsNumbers.map(double)
// console.log(doubledNumbers);

// const squaredNumbers = numbersAsNumbers.map(function(num){  return num * num;
// })
// console.log(squaredNumbers);

// // kürzere schreibweise für die function
// const squaredNumbers2 = numbersAsNumbers.map((num) => num* num)
// console.log(squaredNumbers2);

// //? forEach()
// // führt die übergebene Funktion für jedes Element im Array 1x aus
// beispielWorte.forEach((element)=>{
//     console.log(element);
// })

// //? filter()
// const gefilterteWorte = beispielWorte.filter((element)=>(element.length <= 5))
// console.log(gefilterteWorte);

// ! Übungen                                            

// * Array-TS-Sort-Level-1_2 (sort + reverse)
//?  arrays absteigend alphabetisch sortieren

const codingLanguages: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "Ruby",
    "PHP",
    "C++",
    "CSS",
    "C#",
    "Go",
    "C",
    "TypeScript",
    "Swift"
];

console.log(`unsortiert: ${codingLanguages}`);
const sortDescending = codingLanguages.sort().reverse()
console.log(`absteigend sortiert: ${sortDescending}`);

// * Array-TS-Sort-Level-2_1
//? Programm, das Zeichenketten umkehrt

//? split() & join()
const randomString = "Moin"
const splittedRandomString = randomString.split("") // teilt den string in die einzelnen Buchstaben
console.log(randomString.split(""));


const reversedRandomString = splittedRandomString.reverse().join("") // reversed die einzelnen Buchstaben und fügt es dann zusammen
console.log(reversedRandomString);

function reverseStrings (string: string){
   const splitElement = string.split("");
   const reversedString = splitElement.reverse().join("")
   console.log(reversedString);
   return reversedString
}

reverseStrings("han nesaH has ennaH")

// * Array-TS-Level-1_11 (includes)
//? includes() ist case sensitive

const string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

console.log(string.includes("Piper")); // true
console.log(string.includes("piper")); // false
console.log(string.includes("peck", 0)); // true
console.log(string.includes("peck", 30)); // false

// * Array-TS-Level-3_1 (find, split, trim)
//? In Arrays suchen und Inhalte aufbereiten
// !

const artworks = [
    "Die Sternennacht - Vincent van Gogh",
    "Guernica - Pablo Picasso",
    "Die Geburt der Venus - Sandro Botticelli",
    "Die Nachtwache - Rembrandt",
    "Die Mona Lisa - Leonardo da Vinci",
    "Die Kartoffelesser - Vincent van Gogh",
    "Der Schrei - Edvard Munch",
    "Das letzte Abendmahl - Leonardo da Vinci",
    "Die freudige Botschaft - James Tissot",
    "Der Garten der Lüste - Hieronymus Bosch"
]

const artworksDates = [
    "Die Sternennacht - 1889",
    "Guernica - 1937",
    "Die Geburt der Venus - 1486",
    "Die Nachtwache - 1642",
    "Die Mona Lisa - 1503",
    "Die Kartoffelesser - 1885",
    "Der Schrei - 1893",
    "Das letzte Abendmahl - 1495",
    "Die freudige Botschaft - 1885",
    "Der Garten der Lüste - 1505"
]




// function findArtworkAndTellMeAboutIt (artworkName: string){

    
// }

// findArtworkAndTellMeAboutIt("Schrei")


// const findArtworkName = artworks.find( function(name) {
//         console.log(name);
//         return name
//     })


// * Array-TS-Iteration-Level-1_2 (map)
//? map()

const drinks = ['Coca-Cola', 'Apfelsaft', 'Pepsi', 'Traubensaft', 'Sprite', 'Orangensaft', 'Red Bull Energy Drink', 'Fanta']

const upperDrinks = drinks.map(function(string){
    const upperStrings = string.toUpperCase();
    console.log(upperStrings);
    return upperStrings
})

console.log(upperDrinks);

const iLikeDrinks = drinks.map(function(string){
    const logString = console.log(`I like ${string}.`);
    return logString
})


// * Array-TS-Iteration-Level-1_4 (map)
//? map()

const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const fahrenheitToCelisius = fahrenheit.map(function(number){
    const celciusLong = (number - 32) / 1.8;
    const celciusResult = Math.round(celciusLong)
    console.log(celciusResult);
    return celciusResult
})

// * Array-TS-Iteration-Level-1_5 (map)
//? map()

const checkNumber: number[] = [
    18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78
];

const randomNumbers = checkNumber.map(function(number){
    if (number % 3 === 0){
       return number + 100;
    }else {
       return number;
    }
})

console.log(randomNumbers);

// * Array-TS-Iteration-Level-1_6 (map oder forEach)
//? .map() vs .forEach()

const album: string[] = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg"
];

const namesLow = album.map(function(strings){
     return strings.toLowerCase()
})
console.log(namesLow);

function cutEnding (name: string) {
    if (name.includes(".jpg") || name.includes(".gif")){
        return name.slice(0, -4)
    } else {
    return "invalid"
    }
}

 const newFileName = namesLow.map(cutEnding)
 console.log(newFileName);

// * Array-TS-Iteration-Level-1_8 (filter)
//? .filter()

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function printEvenNumbers (number: number){
    return number % 2 === 0
    ? true
    : false;
}

function printOddNumbers (number: number){
    return number % 2 !== 0
    ? true
    : false;
}

const evenNumbers = zahlen.filter(printEvenNumbers)
console.log(evenNumbers);

const oddNumbers = zahlen.filter(printOddNumbers)
console.log(oddNumbers);