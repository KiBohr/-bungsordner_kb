//* fetch-level-1_1
console.warn("fetch-level-1_1");
//? fetch("")
// fetch Picsum API
// https://picsum.photos/v2/list
// gib Liste der Bilder in console aus
// Fange Fehler mit .catch() auf und zeige sie in der console an

// fetch("https://picsum.photos/v2/list")
//   .then((response) => {
//     return response.json();
//   })

//   .then((data) => {
//     console.log("Every Picture Object:");
//     logPictureArrays(data);
//   })
//   .catch(() => {
//     console.log("There has been an error.");
//   });

// // type festlegen
// export type Picture = {
//   id: string;
//   author: string;
//   width: number;
//   height: number;
//   url: string;
//   download_url: string;
// };

// // function, die alle Arrays in der Console ausgibt
// export function logPictureArrays(list: Picture[]) {
//   console.log(list);
// }
