// ! LiveCode
//window ist im Browser das globale Objekt, als das in dem alles Andere einsortiert ist

//window.navigator enthält Infos über den Browser, seine Einstellungen und den Rechner selbst

// console.log(window.navigator.language);

// * date mit setInterval() & clearInterval()

const timeOutput = document.querySelector("#timeoutput");

function displayTime() {
  if (timeOutput) {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const time = `${hour}: ${minute}: ${second}`;
    timeOutput.textContent = time;
  }
}
setInterval(displayTime, 1000);

const intervalId = setInterval(displayTime, 1000);

const timeStopButton = document.querySelector<HTMLButtonElement>("#time-stop");

if (timeStopButton) {
  timeStopButton.addEventListener("click", () => {
    clearInterval(intervalId);
  });
}

//* history

//* dialoge

// const confirmed = window.confirm("You sure?");
// if (!confirmed) {
//   history.back();
// }

// *localeStorage
let username = localStorage.getItem("username");

// if (!username) {
//   username =
//     window.prompt("Please insert your username") ?? "Mimi Mustermensch";
//   localStorage.setItem("username", username);
// }
// console.log(username);
