//  ! Live Coding


console.log("test");

// Elemente auswählen, die wir später brauchen

const numberInputA = document.querySelector("#number-a") as HTMLInputElement;

const numberInputB = document.querySelector("#number-b") as HTMLInputElement;

const button = document.querySelector("#addition-button") as HTMLButtonElement;

const resultElement = document.querySelector("#result") as HTMLSpanElement;


// funktion, die beim klicken auseglöst werden soll

function add(){
    const numberA = numberInputA.valueAsNumber;
    const numberB = numberInputB.valueAsNumber;
    console.log(numberA, numberB);

    const result = numberA + numberB;

    // const comment = result < 100 
    // ? "(das ist eine kleine Zahl)" 
    // : "(Hurra, endlich eine Zahl über 100)";

    resultElement.innerText = result.toFixed(2)
}

button.onclick = add;

// ! Übungen                                    

// * Conditionals-Level-2_1                

const johnHeight = 170
const johnAge = 22

const MeikeHeight = 168
const MeikeAge = 34

let PointsJohn = (johnAge * 5) + johnHeight;
let PointsMeike = (MeikeAge * 5) + MeikeHeight;

if (PointsJohn > PointsMeike) {
    console.log(`John wins the game with ${PointsJohn}  points.`)
} else {
    console.log(`Meike wins the game with ${PointsMeike} points.`);
}

if (PointsJohn == PointsMeike) {
    console.log(`Both people win the game`);
}

// * Conditionals-TS-Level-2_3 (if/else)        

const declaredNumber = 27;

let randomNumber = Math.random();

let difference = declaredNumber - randomNumber;

difference.toFixed(2)

if (difference > 27) {
    console.log(`result: ${difference.toFixed(2)} * 2`);
} else {
    console.log(`result without multiplication: ${difference.toFixed(2)}`);
}

// * Conditionals-TS-Level-1_4 (Ternary Operator)   

let passwordInfo = document.querySelector("#comment1") as HTMLParagraphElement

let inputElement = document.querySelector("#password1") as HTMLInputElement

const safeButton = document.querySelector("#btn") as HTMLButtonElement

// safeButton.onclick
safeButton.addEventListener("click", ()=>{
    console.log("clicked");
    let inputLength = inputElement.value

    let passwordSecurity = inputLength.length >= 8
    ? `Jeah, your password is long enough.`
    : `Upsi, please use at least 8 characters for your password.`

    passwordInfo.innerText = passwordSecurity
})

// * Ternary-Operator-TS-Level-2_2          


const isOnline = Math.random() < 0.5 ;
const isPremiumUser = Math.random() < 0.5 ;
const isAdult = Math.random() <0.5 ;

console.log(isAdult, isOnline, isPremiumUser);

const checkOnline = isOnline == true
    ? console.log("online")
    : console.log("offline");


let monthlyFee 

const checkPremium = isPremiumUser == true
    ? console.log(monthlyFee = 19.99)
    : console.log(monthlyFee = 12.99); 


// const checkAdult = isAdult == false
//     ? window.alert("Keine Berechtigung")
//     : window.confirm (" Willkommen")


let randomAge = Math.floor(Math.random() * 121)
console.log(randomAge);

let randomSalary = Math.round(Math.random() * 15001)
console.log(randomSalary);

let isMiddleAged

const ageCheck = randomAge >=40 && randomAge <= 65
    ? isMiddleAged = true
    : isMiddleAged = false;

    console.log(isMiddleAged);

const salaryCheck = randomSalary > 10000
    ? console.log("You are rich")
    : ( randomSalary > 1500
        ? console.log("not that bad")
        : console.log("sad")
    )

    

// * Conditionals-TS-Level-2_4 (if/else, switch)        

const randomNumber1 = Math.round(Math.random() * 78)
const randomNumber2 = Math.round(Math.random() * 78)


if (randomNumber1 == randomNumber2) {
    console.log("Was für ein Zufall");
} else if (randomNumber1 < randomNumber2) {
    console.log("Zweite Nummer ist größer.");
} else if (randomNumber1 > randomNumber2) {
    console.log("Erste Nummer ist größer.");
}

