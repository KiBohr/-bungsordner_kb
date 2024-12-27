import{differenceInYears, differenceInDays, differenceInHours, differenceInMinutes} from "date-fns"

// ! LiveCode Math & Date


// // * Math

// const krummeZahl = 12.6134

// console.log(Math.floor(krummeZahl));

// console.log(Math.ceil(krummeZahl));

// console.log(Math.round(krummeZahl));

// console.log(krummeZahl.toFixed(2));


// // let zufallsBoolean: boolean;

// // if (Math.random() < 0.5) {
// // zufallsBoolean = true;
// // } else {
// //     zufallsBoolean = false;
// // }

// const zufallsBoolean = Math.random() < 0.5
// ? true
// : false;

// console.log(zufallsBoolean);

// // * switch

// const farbe : string = "lila"

// switch (farbe) {
//     case "blau":
//         console.log("Himmel");
//         break;
//     case "grün":
//         console.log("Gras");
//         break;
//     case "rot":
//         console.log("Feuer");
//         break;
//     default:
//         console.log("nothing found");
// }  

// // *  Date

// const now = Date.now();
// const nowDate = new Date ();

// const year = nowDate.getFullYear()
// const month = nowDate.getMonth() + 1;
// const day = nowDate.getDate()

// const hour = nowDate.getHours();
// const minutes = nowDate.getMinutes();
// const seconds = nowDate.getSeconds();

// const dateElement = document.querySelector("#date") as HTMLParagraphElement

// console.log(year, month, day);

// dateElement.innerHTML = `${day}. ${month}. ${year} ${hour}:${minutes}:${seconds < 10 ? "0" : ""}${seconds}`


// nowDate.toLocaleString("de-DE") 
// nowDate.toLocaleTimeString ("de-DE")


// const dateExampleA = new Date(0)
// const dateExampleB = new Date(1735)


// // * nullish Coalescing Operator (??)

// const input = document.querySelector("#input") as HTMLInputElement;
// const button = document.querySelector("#button") as HTMLButtonElement;

// function logInput(){

//     const text = input?.value ?? "Kein Input gefunden."
// }

// if (button){
//     button.onclick = logInput
// }

// ! Übungen                                                        

// * Date-TS-Level-1_1

const inputP1 = document.querySelector("#date1") as HTMLParagraphElement
const inputP2 = document.querySelector("#date2") as HTMLParagraphElement
const inputP3 = document.querySelector("#date3") as HTMLParagraphElement
const inputP4 = document.querySelector("#date4") as HTMLParagraphElement

const date = new Date("September2,2019 09:00:00") 
console.log(date); // Mon Sep 02 2019 09:00:00 GMT+0200 (Mitteleuropäische Sommerzeit)
inputP1.innerHTML = `1. ${date}`

const date1 = new Date(0)
console.log(date1); //Thu Jan 01 1970 01:00:00 GMT+0100 (Mitteleuropäische Normalzeit)
inputP2.innerHTML = `2. ${date1}`

const date2 = new Date(31556908800)
console.log(date2); // Fri Jan 01 1971 06:48:28 GMT+0100 (Mitteleuropäische Normalzeit)
inputP3.innerHTML = `3. ${date2}`

const date3 = new Date(86400000)
console.log(date3); // Fri Jan 02 1970 01:00:00 GMT+0100 (Mitteleuropäische Normalzeit)
inputP4.innerHTML = `4. ${date3}`

// * Date-TS-Level-2_1

const output1 = document.querySelector("#output-1") as HTMLParagraphElement
const output2 = document.querySelector("#output-2") as HTMLParagraphElement
const output3 = document.querySelector("#output-3") as HTMLParagraphElement
const output4 = document.querySelector("#output-4") as HTMLParagraphElement

const aktuellesDatum = new Date()

const datum  = aktuellesDatum.getDate() 

const month = aktuellesDatum.getMonth() +1

const year =  aktuellesDatum.getFullYear()

const hour = aktuellesDatum.getHours()

const minutes = aktuellesDatum.getMinutes()

const localTime = aktuellesDatum.toLocaleTimeString()
console.log(localTime);

const utc = aktuellesDatum.toUTCString()
console.log(utc);

output1.innerHTML = `1. ${datum}-${month}-${year}`

output2.innerHTML = `2. ${datum}/${month}/${year}`

output3.innerHTML = `3. ${hour}:${minutes < 10 ? "0" : ""}${minutes}`

output4.innerHTML = `4. ${utc}`

// * Date-TS-Level-3_2

const difYears = document.querySelector("#dif-year") as HTMLParagraphElement
const difDays = document.querySelector("#dif-days") as HTMLParagraphElement
const difHour = document.querySelector("#dif-hours") as HTMLParagraphElement
const difMin = document.querySelector("#dif-minutes") as HTMLParagraphElement

const firstDate = new Date(0)
console.log(firstDate);

const nowDate = new Date()
console.log(nowDate);

const differenceYears = differenceInYears(nowDate, firstDate)
difYears.innerHTML = `There are ${differenceYears} years between 1970 and now.`

const differenceDays = differenceInDays (nowDate, firstDate)
difDays.innerHTML = `There are ${differenceDays} days between 1970 and now.`

const differenceHours = differenceInHours (nowDate, firstDate)
difHour.innerHTML = `There are ${differenceHours} hours between 1970 and now.`

const differenceMin = differenceInMinutes (nowDate, firstDate)
difMin.innerHTML = `There are ${differenceMin} minutes between 1970 and now.`

// * Math-TS-Level-1_1
//? Math-PI

let pi = Math.PI;
console.log(pi);

let roundedPi = Math.PI.toFixed(2);
console.log(roundedPi);

// * Math-TS-Level-1_2
// ? Math.round

function rounded(randomNr:number) {
    let round = Math.round(randomNr)
    console.log(round);
}
rounded(3.3) // 3
rounded(193.2) // 193
rounded(0.8) // 1
rounded(-2.9) // -3

// * Math-TS-Level-1_3
// ? Math.random & Math.florr

const randomNum = Math.random().toFixed(2)
console.log(randomNum);

const randomNum10 = Math.floor(Math.random()*10)+1
console.log(randomNum10);

const randomNum100 = Math.floor(Math.random() *100)+1
console.log(randomNum100);

// * Math-TS-Level-2_2
// ? Math.random() & promt

const number10 = Math.floor(Math.random()*10)+1
console.log(number10);

const game = prompt("This is a guessing game. Please enter a number between 1 and 10.")??""
console.log(game);

const feedback = game == number10.toString()
? prompt("That is correct. You won.", "Nice!")
: prompt(`You guessed wrong. The correct number would have been ${number10}.`, "That sucks!");


// * Conditionals-TS-Level-1_5 (switch)
// ? switch

let windowValue = window.prompt("Please insert a number from 1 to 7.")

const weekdayAsNumber = windowValue

switch (weekdayAsNumber) {
    case "1":
        prompt(" It is Monday", "Well, that sucks.");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
    case "7":
        console.log("Sunday");
        break;
}

// * Conditionals-TS-Level-2_8 (switch)
// ? switch 

const schoolGrade = Math.floor(Math.random()*10)+1

switch(schoolGrade){
    case 1:
        console.log("sehr gut");
    break;
    case 2:
        console.log("gut");
    break;
    case 3:
        console.log("befriedigend");
    break;
    case 4:
        console.log("ausreichend");
    break;
    case 5:
        console.log("mangelhaft");
    break;
    case 6:
        console.log("ungenügend");
    break;
    default:
        console.log("Das ist keine Schulnote.");
    break;
}

// * Conditionals-TS-Level-3_1 (switch)
//? switch

let salesMonth = Math.floor(Math.random()*12)+1

switch(salesMonth){
    case 1:
    case 2:
    case 3:
        console.log("1. Quartal");
    break;
    case 4:
    case 5:
    case 6:
        console.log("2. Quartal");
    break;
    case 7:
    case 8:
    case 9:
        console.log("3. Quartal");
    break;
    case 10:
    case 11:
    case 12:
        console.log("4. Quartal");
    break;
}

let totalSales = Math.floor(Math.random()*10000)+1000

let salesOutput

// switch(totalSales){
//     case totalSales <= 2500:
//         salesOutput = "schlecht"
//         break;
//     case totalSales <= 5000: totalSales >= 2501:
//         salesOutput = "mittelmäßig"
//         break;
//     case totalSales <= 7500: totalSales >= 5001:
//         salesOutput = "hoch"
//         break;
//     case totalSales <= 10000: totalSales >= 7501:
//         salesOutput = "unglaublich"
//         break;
// }

// !funktioniert nicht, syntax unklar

