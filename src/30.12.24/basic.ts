//  ! LiveCoding :functions
// console.log("hallo");

import { compareDesc } from "date-fns";
import { add } from "date-fns/fp";

// function addNumbers(a : number, b : number) : number {

//     return a + b;
// }

// function writeValueToDom(value: number): void{

//     const element = document.querySelector("#ergebnis") 
//     if (element !== null){
//         element.innerHTML = value.toString();
//     }
// }

// writeValueToDom(1000)

// const sum = addNumbers(1, 2)
// console.log(sum);


// // * syntax 2 für fnc
// const writeValueToDom1 = function(value1: number): void {

//     const element = document.querySelector("#ergebnis") 
//     if (element !== null){
//         element.innerHTML = value1.toString();
//     }
// }

// // * syntax 3 für fnc

// const quadratBerechnen = (a: number): number => {

//     return a * a;
// }

// console.log(quadratBerechnen(9));

// // ? noch verkürzter:

// const hochDrei = (a: number): number => a * a * a;
// console.log(hochDrei(3));


// // * defaultwerte 
// function logLargeMeasseWithColor (message: string, color:string = "green"): void {
    
//     const lenght = message.length
    
//     let fontSize 
//     if(lenght < 10){

//         fontSize = "2rem"
//     } else{
//         fontSize = "1rem"
//     }

//     console.log(`%c${message}`, `color:${color}; font-size: ${fontSize}`);
// }

// logLargeMeasseWithColor("Slay!", "blue")

// logLargeMeasseWithColor("You´ve overdone it queen.")


// ! Übungen

// * Functions-TS-Level-1_3

function showPersonInfo(name: string, city: string, age: number) {
    console.log(`Hallo, mein Name ist ${name}. Ich bin ${age} Jahre alt und komme aus ${city}.`);
}

showPersonInfo("SuperCoderin", "Hamburg", 29)

// *  Functions-TS-Level-1_5

function mulitplyAndDevide(a: number, b: number){
    console.log(`Mulitplikation von ${a} und ${b} = ${a * b}  `);
    console.log(`Division von ${a} und ${b} = ${a / b} `);

    if(b == 0){
        console.log(`Division durch 0 ist nicht erlaubt`);
    }
}
mulitplyAndDevide(10, 2)
mulitplyAndDevide(30, 20)
mulitplyAndDevide(5, 0)
mulitplyAndDevide(100, 100)
mulitplyAndDevide(45, 173)
mulitplyAndDevide(1, 1000)


// * Functions-TS-Grundlagen-Level-1_1
//? Function und Syntax - Arrow

function intro1() {
    console.log("Hello Function.");
}
intro1()

const intro2 = () => {
    console.log("Hello Arrow-Function.");
}
intro2()

// * Functions-TS-Grundlagen-Level-1_4

function showHero(heroName: string, heroPower: string, heroEnemy: string){

    let nameOutput = `Mein:e Lieblingsheld:in ist ${heroName}.`
    let powerOutput = `Dey haben die Fähigkeit ${heroPower}`
    let enemyOutput = `Deren größte Gegner:in ist ${heroEnemy}`

    console.log(nameOutput, powerOutput, enemyOutput);
}

showHero("Ich, wenn ich Energie habe", "schnell zu reden.", "Überstimulation.")

// * Functions-TS-Grundlagen-Level-1_6
// ? Vergleich functions vs variables

function returnOne(){
    return 1
}

const x = 1;
const y= returnOne()

if (x == y) {
    console.log("Wird das gedruckt?");
}else {
    console.log("Wird nicht, ne.");
}

// * Functions-TS-Grundlagen-Level-1_7
//? Parameter und Argument

function mulitplyWith(c: number) {
    return c * 2;
}

mulitplyWith(8)
console.log(mulitplyWith(8));

// * Functions-TS-Grundlagen-Level-1_8

function calculateAge(birthYear: number) {
    
    let now = new Date();
    let yearNow = now.getFullYear();

    return yearNow - birthYear
}

calculateAge(1995)
console.log(calculateAge(1995));


// * Functions-TS-Grundlagen-Level-1_9
// ? functions, parameter, Zeichenverkettung

function IntroduceMyself(Vorname: string, Nachname: string, Geburtsort: string, Alter: number, Wohnort:string) {

    console.log(`Mein Name ist ${Vorname} ${Nachname}. Ich bin in ${Geburtsort} geboren. Ich lerne bei SuperCode. Ich bin ${Alter} Jahre alt und wohne in ${Wohnort}.`);
}

IntroduceMyself("Schnipps", "Schnups", "Schnupseldorf", 32, "Schnapfiland")


// * Project-TS Spielstandsanzeige

// ? output
let outputHome = document.querySelector("#output-home") as HTMLParagraphElement
let outputAway = document.querySelector("#output-away") as HTMLParagraphElement

// ? buttons
const resetButton = document.querySelector("#reset-button") as HTMLButtonElement
const buttonPlus1 = document.querySelector("#plus-1") as HTMLButtonElement
const buttonPlus2 = document.querySelector("#plus-2") as HTMLButtonElement
const buttonPlus3 = document.querySelector("#plus-3") as HTMLButtonElement
const buttonPlus1_1 = document.querySelector("#plus-1_1") as HTMLButtonElement
const buttonPlus2_1 = document.querySelector("#plus-2_1") as HTMLButtonElement
const buttonPlus3_1 = document.querySelector("#plus-3_1") as HTMLButtonElement

let defaultHomeScore : number = 0;
let defaultAwayScore : number = 0;

function homePlus (add : number) {
    defaultHomeScore = defaultHomeScore + add;
    outputHome.innerHTML = `${defaultHomeScore}`;
}

buttonPlus1.onclick = () => homePlus(1);
buttonPlus2.onclick = () => homePlus(2);
buttonPlus3.onclick = () => homePlus(3);

function awayPlus (add1 : number) {
    defaultAwayScore = defaultAwayScore + add1;
    outputAway.innerHTML = `${defaultAwayScore}`;
}

buttonPlus1_1.onclick = () => awayPlus(1);
buttonPlus2_1.onclick = () => awayPlus(2);
buttonPlus3_1.onclick = () => awayPlus(3);


function reset() {
    outputHome.innerHTML = `${defaultHomeScore = 0}`
    outputAway.innerHTML = `${defaultAwayScore = 0}`
}
resetButton.onclick = reset
