// ! LiveCoding     
// console.log("merry chrism");

// const lieblingsfarben = [
//     "grün",
//     "gelb",
//     "blau",
//     "rot",
//     "pink",
// ];

// console.log(lieblingsfarben);

// console.log(lieblingsfarben[3]); // holt rot, weil grün = 0

// lieblingsfarben[3] = "weiß"
// console.log(lieblingsfarben[3]);

// console.log(lieblingsfarben[lieblingsfarben.length -1]);

// // * array methods
// //? push()
// lieblingsfarben.push("lila")
//     console.log(lieblingsfarben);

// //? pop()
// lieblingsfarben.pop()
//     console.log(lieblingsfarben);

// //? shift()
// lieblingsfarben.shift()
//     console.log(lieblingsfarben); 

// //? unshift()
// lieblingsfarben.unshift("lila")
//     console.log(lieblingsfarben);
//     lieblingsfarben[0] = "violet"
//         console.log(lieblingsfarben);

// //? splice()
// lieblingsfarben.splice(2,0,"aquamarin")
// console.log(lieblingsfarben);

// lieblingsfarben.splice(0,1,"rubin")
// console.log(lieblingsfarben);

// //? slice()
// lieblingsfarben.slice(1,2)
// console.log(lieblingsfarben.slice(1,2))

// const concatErgebnis = lieblingsfarben.concat(["tomate", "gurke"])
// console.log(concatErgebnis);

// const spreadErgebnis = [...lieblingsfarben, "tomate", "lavendel"]


// ! Übungen                                            

// * Array-TS-Level-1_1
//? definieren von Arrays

const bucketList = ["Japan", "Kanada", "Kroatien"]
const luckyNumbers = [3, 8, 22]
const favoritePeople = ["person1", "person2", "person3"]

console.log(bucketList,luckyNumbers,favoritePeople);

// * Array-TS-Level-1_2
//? Zugriff auf Array werte 

console.log(bucketList[0]);
console.log(bucketList[1]);
console.log(bucketList[2]);
console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);
console.log(favoritePeople[0]);
console.log(favoritePeople[1]);
console.log(favoritePeople[2]);

// * Array-TS-Level-1_3 (length)
//? .lenght
console.log(`Anzahl der Elemente bei:`);
console.log(`bucketList: ${bucketList.length}`);
console.log(`luckyNumbers: ${luckyNumbers.length}`);
console.log(`favoritePeople: ${favoritePeople.length}`);

// * Array-TS-Level-1_4 (push)
//? push()

const wetter = ["sonnig", "regnerisch", "bewölkt"]
console.log(wetter);
console.log(wetter.length);

wetter.push("hagel", "diesig")
console.log(wetter);
console.log(wetter.length);

// * Array-TS-Level-1_5 (pop)
//? pop()

const diesig = wetter.pop()
console.log(wetter);

console.log(diesig);

// * Array-TS-Level-1_6 (shift)
//? shift()

const person1 = favoritePeople.shift()
console.log(favoritePeople);
console.log(person1);

// * Array-TS-Level-1_7 (unshift)
//? unshift()

bucketList.unshift("Frankreich", "Italien")
console.log(bucketList);

// * Array-TS-Level-1_8 (slice)
//? slice()

const lieblingsReiseZiele = ["Berlin", "Buxtehude"]
console.log(lieblingsReiseZiele);
lieblingsReiseZiele.slice(0,2)
console.log(lieblingsReiseZiele.slice(0,2));
console.log(lieblingsReiseZiele);

// * Array-TS-Level-1_9 (push/pop shift/unshift)
//? push() vs. pop()/ shift() vs. unshift()

const number1 = [23,54,75]
number1.push(1,2,3,4,5)
console.log(number1);

number1.unshift(18,19,20,21,22)
console.log(number1);

const number2 = number1.pop()
console.log(number1);
console.log(number2);

const number3 = number1.pop()
console.log(number1);
console.log(number3);

// * Array-TS-Level-1_14 (copy)
//? arrays kopieren

const oldHollywoodActors = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"]
console.log(oldHollywoodActors);

const actorsReference = oldHollywoodActors

oldHollywoodActors.push("Marilyn Monroe")
console.log(oldHollywoodActors);
console.log(actorsReference);

const copy1 = oldHollywoodActors.concat()
console.log(copy1);

const copy2 = [...oldHollywoodActors]
console.log(copy2);