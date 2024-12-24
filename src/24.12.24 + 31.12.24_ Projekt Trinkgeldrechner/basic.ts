
const button = document.querySelector("#btn") as HTMLButtonElement;

let price = document.querySelector("#how-much") as HTMLInputElement;

const amountOfPeople = document.querySelector("#how-many") as HTMLInputElement;

const qualityOfService = document.querySelector("#drop-down") as HTMLSelectElement;

const tipElement = document.querySelector("#tip-output") as HTMLDivElement;

const wholeBillElement = document.querySelector("#bill-output") as HTMLDivElement;

const pricePerPersonElement = document.querySelector("#price-per-person-output") as HTMLDivElement;


function calculate(){

    let bill = price.valueAsNumber
    const people = amountOfPeople.valueAsNumber
    const service = Number(qualityOfService.value)

    console.log(service);

    const resultPrice = bill // Value from How much
    const resultTip = bill * (service/ 10)// Tip
    const resultBill = resultPrice + resultTip // Bill + the tip
    const moneyPerPerson = resultBill / people // how much money every peron needs to pay

    console.log(resultPrice);

    tipElement.innerText = `Your tip is: ${resultTip.toFixed(2)}$.`

    wholeBillElement.innerText = `Your total is: ${resultBill.toFixed(2)}$.`
    
    pricePerPersonElement.innerText = `Everyone needs to pay: ${moneyPerPerson.toFixed(2)}$.`


    if (bill = NaN ){
        tipElement.innerText = `You haven´t filled all of the boxes. Please check if something is missing and try again.`

        wholeBillElement.innerText = ``
    
        pricePerPersonElement.innerText = ``
    }
}

button.onclick = calculate;