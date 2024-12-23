// // !Live_Coding:
// console.log("test tag 2");

// const kurzesBeispiel = "String Methods";

// const langesBeispiel = 'uighduisghdiuasghdiusagduisagdiugsiudguasigduig';

// // : .length - property
// kurzesBeispiel.length;
// console.log(kurzesBeispiel.length);

// // : indexOf() - method
// const index = langesBeispiel.indexOf("i")
// console.log(index);

// // : slice()
// const string = kurzesBeispiel.slice(7)
// console.log(string);
// const ring = kurzesBeispiel.slice(2,6)
// console.log(ring);

// // : replace()
// // ersetzt im string das nur das erste was es findet
// // replaceAll() ersetzt alle 
// const stringProperty = kurzesBeispiel.replace("Methods", "Property");
// console.log(stringProperty);

// // : toUpperCase/ toLowerCase

// const laut = langesBeispiel.toUpperCase
// console.log(laut);

// // : .concat
// //  equivalent zum plus-operator
// const zusammengesetzterString = kurzesBeispiel.concat(" Das Wetter ist schön. " , "Wie gehts es dir?")
// console.log(zusammengesetzterString);

// // : toFixed
// //  rundet auf angegebene Nachkommastelle

// const zahl = 3.12234345232
// console.log(zahl.toFixed(2));


// // * DOM

// const überschrift = document.querySelector("h1");

// if(überschrift !== null){
//     überschrift.innerHTML = "Tag 2 - Strings🪷"
//     überschrift.classList.add("testKlasse");
// } else {
//     window.alert("Hey, es gibt keine Überschrift :(")
// }

// ! Übungen            


// ! string methods
// * String-Methods-TS-Level-1_1
// - .lenght property

let firstName = "Lila";
let lastName = "Blue";

let fullName = firstName + lastName;

console.log(firstName.length);

console.log(fullName.length);

// * String-Methods-TS-Level-1_2
//  - indexOf() method

const earthQuote = `How inappropriate to call this planet Earth, when clearly it is Ocean.`

console.log(earthQuote.indexOf("h"));
console.log(earthQuote.indexOf("Earth"));
console.log(earthQuote.indexOf("Moon")); // -1 weil nicht vorhanden


//  * String-Methods-TS-Level-1_4
// - slice() method

const susisStatus = 'Susi is going to codingschool'

console.log(susisStatus.slice(0,4));

console.log(susisStatus.slice(5,7));

console.log(susisStatus.slice(5,16) + susisStatus.slice(4,5) + susisStatus.slice(23,30));

console.log(susisStatus.slice(23,30));

console.log(susisStatus.slice(0,4) + susisStatus.slice(4,5) + susisStatus.slice(5,7) + susisStatus.slice(4,5) + susisStatus.slice(23,30));

// * String-Methods-TS-Level-1_5
// - substring()

const whereIsSusi = 'Susi is back from codingschool'

let leerzeichen = whereIsSusi.substring(4,5)

let susi = whereIsSusi.substring(0,4)
console.log(whereIsSusi.substring(0,4)); // - "susi"

let is = whereIsSusi.substring(5,7);
console.log(whereIsSusi.substring(5,7)); // - "is"

let school = whereIsSusi.substring(24,30)
console.log(whereIsSusi.substring(24,30)); // - "school"

let susiIsShool = susi + leerzeichen + is + leerzeichen + school; // - "Susi is school"
console.log(susiIsShool);

// * String-Methods-TS-Level-1_7
// - replace()

const samsStatus = "Sam is good at codingschool."

let bad = samsStatus.replace("good", "bad")
console.log(bad);

let susi1 = samsStatus.replace("Sam", "Susi")
console.log(susi1);

let tennis = samsStatus.replace("codingschool", "tennis")
console.log(tennis);

// * String-Methods-TS-Level-1_9
// - concat()

const infoAboutSam = "Sam is going to codingschool"

const susi2 = "Susi"

const and = " and "

let school1 = infoAboutSam.slice(22,28)
console.log(school1);

let samIsGoingTo = infoAboutSam.slice(0,16)
console.log(samIsGoingTo);

let theater = samIsGoingTo.concat( school1 + and + "to the movie theater.")
console.log(theater);

let both = susi2 + and + "Sam are going to " + school1 + ".";
console.log(both);

let gym = susi2 + and + "Sam are going to the gym" + and + "to the movie theater." 
console.log(gym);

let susi3 = samIsGoingTo.replace("Sam", "Susi") + school1 + and + "to the movie theater."
console.log(susi3);

// * String-Methods-TS-Level-1_8
// - toUpperCase() -toLowerCase()

const whereIsSam = "Sam is going to school"
console.log(whereIsSam.toUpperCase());
console.log(whereIsSam.toLowerCase());

let sam1 = whereIsSam.slice(0,3).toUpperCase() // - "SAM"
let sam1_2 = whereIsSam.slice(4,15) // - "is going to"
let sam1_1 = whereIsSam.slice(16,24).toUpperCase() // - "SCHOOL"

let sam1_3 = sam1 + " " + sam1_2 + " " + sam1_1
console.log(sam1_3);

let sam2 = whereIsSam.slice(0,3).toLowerCase(); // - "sam"
let sam2_1 = sam1_2.toUpperCase() // - "IS GOING TO"
let sam2_2= sam2 + " " + sam2_1 + " " + whereIsSam.slice(16,24)
let sam2_final = sam2_2.replaceAll("s", "S")
console.log(sam2_final);

// ! number methods
// * Number-Methods-TS-Level-1_3

let test = 15;
let a = test.toString();
console.log(a);
let b = test.toString(15.16698)
console.log(b);
let c = test.toString(8)
console.log(c);
let d = test.toString(16)
console.log(d);

// * Number-Methods-TS-Level-1_2
// - toFixed()

let one =  15.16698;
let one_fixed = one.toFixed(2)
console.log(one_fixed);

let two =  7.78714;
let two_fixed = two.toFixed(2)
console.log(two_fixed);

let three: number = 12.3;
let three_fixed = three.toFixed(2)
console.log(three_fixed);

// let four =  true;
// let four_fixed = four.toFixed(2)
// console.log(four_fixed);

// * String-Methods-TS-Level-2_3

// value aus input

function searchAndHighlight(){

    const InputElement =  document.querySelector("#search-input") as HTMLInputElement;
    const inputValue = InputElement.value;

    console.log("inputValue: "); 
    console.log(inputValue); 

    const replaceValue = `<span class="bg-amber-200"> ${inputValue}</span>`

    console.log("replaceValue: "); 
    console.log(replaceValue); 
    
    // value in text suchen - textinhalt replacen
    
    const articleElement = document.querySelector("#text") as HTMLDivElement

    const articleContent = articleElement.innerHTML;

    const changedArticleContent = articleContent.replaceAll(inputValue, replaceValue);

    articleElement.innerHTML = changedArticleContent;
}

const buttonElement = document.querySelector("#search-button") as HTMLInputElement;

buttonElement.onclick = searchAndHighlight;









// let btn = document.querySelector("#search-button")

// btn?.addEventListener("click", searchAndMark)

// function searchAndMark(){

//     const searchInputElement = document.querySelector("#search-input") as HTMLInputElement
//     let searchText = document.querySelector(".text");
//     const searchOutput = `<span>${searchInputElement}</span>`
//     console.log(searchOutput);

//     // if (searchText && searchInputElement) {
//     //     // console.log(searchText.innerHTML);
//     //     // console.log(searchText.innerText);
//     //     searchText.innerHTML = searchText.innerText.replaceAll(searchInputElement, searchOutput)
//     // }


//     // if (searchInputElement){
//     //     let searchInput = searchInputElement.value
//     // }

//     // let searchText.innerHTML = searchText.innerHTML.replaceAll("searchInput", "'<span>' + searchInput + '</span>'")
// }






