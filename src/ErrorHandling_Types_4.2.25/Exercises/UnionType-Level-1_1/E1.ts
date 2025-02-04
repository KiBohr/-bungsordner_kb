// * UnionType-Level-1_1
console.warn("UnionType-Level-1_1");

type Result = "succsess" | "error" | "pending";

//- es können nur die drei Optionen gewählt werden
const example: Result = "succsess";

function handleResult(a: Result) {
  if (a === "succsess") {
    console.log("Huzzah, succesfull");
  } else if (a === "error") {
    console.log("Oh noi, an error!");
  } else {
    console.log("Who knows?!");
  }
}

handleResult("pending");
