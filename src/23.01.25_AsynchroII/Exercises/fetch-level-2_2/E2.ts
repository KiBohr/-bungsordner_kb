//* fetch-level-2_2
console.warn("fetch-level-2_2");

// select output
const outputContainer = document.querySelector<HTMLDivElement>("#output-area");

// await wartet auf die erfuellung des Promises, und packt seinen Inhalt aus
const userResponse = await fetch("https://jsonplaceholder.typicode.com/todos");

type ToDo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// data abrufen und entpacken mit await und .json()
const userData: ToDo[] = await userResponse.json();
console.log(userData);

// sortiert die Daten alphabetisch, localeCompare sorgt dafür, dass sort weiß wonach sortiert werden soll
userData.sort((a, b) => {
  return a.title.localeCompare(b.title);
});
// console.log(sortedUser);

//- function, die die Inhalte der User in die Dom schreibt
userData.forEach(async (user: ToDo) => {
  //   console.log(user);
  if (outputContainer) {
    //? Alternative zu in dem p-tag --> const colorClass = user.completed ? "text-green-500" : "text-red-500"
    outputContainer.innerHTML += `<div class="bg-white shadow-sm p-1 rounded-md flex flex-col gap-1">
    <p> UserID: ${user.userId}</p>
    <p> ID: ${user.id}</p>
    <p> Title: ${user.title}</p>
    <p class="${
      user.completed ? "text-green-500" : "text-red-500"
    }" > Status: ${user.completed}</p>
    </div>`;
  }
});
