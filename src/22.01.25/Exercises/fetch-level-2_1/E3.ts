// * fetch-level-2_1
console.warn("fetch-level-2_1");
// - Lernziel: fetch zum Abrufen von Daten von einer API nutzen

//? select output-container

const pictureOutput =
  document.querySelector<HTMLDivElement>("#picture-container");

type Picture = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
};

fetch("https://picsum.photos/v2/list")
  .then((response) => {
    return response.json();
  })

  .then((data: Picture[]) => {
    // get all URLS in an array
    const allUrls = data.map((item) => {
      return item.download_url;
    });

    console.log(allUrls);

    // get all authors in an array
    const allAuthors = data.map((item) => {
      return item.author;
    });
    console.log(allAuthors);

    //?function to put the urls and authors in figures in the dom

    function putPicsinDom(pics: Picture[]) {
      if (pictureOutput) {
        pics.forEach((pic) => {
          // create the figure element and put it into the output Element
          const newPicContainer = document.createElement("figure");

          newPicContainer.className = "flex flex-col items-center";

          pictureOutput.appendChild(newPicContainer);

          //create the picture element and put into the figure
          const newPicture = document.createElement("img");

          newPicture.src = allUrls[pic];

          newPicture.className = "w-[50%]";

          newPicContainer.appendChild(newPicture);

          // create the caption element for the figures

          const captionElement = document.createElement("figcaption");

          captionElement.textContent = allAuthors[pic];

          newPicContainer.appendChild(captionElement);
        });
      }
    }
  })
  .catch(() => {
    console.log("An error has occured.");
  });
