// * build a page with information about birds from an API

//- API https://stfnsr-birdmeister.web.val.run/birds

//? select output field
const birdArea = document.querySelector("#output-area");

//? create Type
type Bird = {
  name: string;
  latinName: string;
  url: string;
};

//? fetch side
const birdResponse = await fetch(
  "https://stfnsr-birdmeister.web.val.run/birds"
);

//? get data
const birdData: Bird[] = await birdResponse.json();
console.log(birdData);

birdData.forEach((bird) => {
  if (birdArea) {
    birdArea.innerHTML += `
            <div class="flex flex-col items-center gap-4 bg-glas-light-brown bg-opacity-50 rounded-md shadow-lg p-4 w-1/5">
                    <p class="self-center font-bold">${bird.name}</p>
                    <p class="text-xs" >latin Name: ${bird.latinName}</p>   
        </div>
            `;
  }
});
