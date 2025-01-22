//* fetch-level-1_2
console.warn("fetch-level-1_2");
//? Lernziel: fetch zum Abrufen von Daten von einer API nutzen
//? API: https://jsonplaceholder.typicode.com/posts/1/comments

//Zugriff auf API
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
  .then((response) => {
    return response.json();
  })
  .then((data: User[]) => {
    const emails = data.map((post) => {
      return post.email;
    });
    console.log("all emails:");
    console.log(emails);
  })
  .catch(() => {
    console.error("there has been an error");
  });

//? type User festlegen
type User = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

// ? neue API fetchen
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data: Post[]) => {
    //- alle posts loggen
    console.log("all posts:");
    console.log(data);

    //- höchste PostID
    console.log("highest ID:");
    const allIds = data.map((post) => {
      return post.id;
    });
    //? mit spread operator, weil Math.max nur auf Zahlen operiert
    console.log(Math.max(...allIds));

    //-kürzester Titel
    //? alle titel holen:
    const allTitles = data.map((post) => {
      return post.title;
    });
    //titel nach länge sortieren mit .lenght und .sort
    const titlesSortedByLength = allTitles.sort((a, b) => {
      return a.length - b.length;
    });
    console.log("shortest title:");
    // kürzesten Titel mit [0], weil erster
    console.log(titlesSortedByLength[0]);

    // - längster body
    //? alle bodys holen
    const allBodies = data.map((post) => {
      return post.body;
    });
    //? bodies sortieren
    const sortedBodiesByLength = allBodies.sort((a, b) => {
      // hier b - a für längstes
      return b.length - a.length;
    });
    console.log("the longest body:");
    console.log(sortedBodiesByLength[0]); // [0], weil erstes im array
  });

//? type Post erstellen
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
