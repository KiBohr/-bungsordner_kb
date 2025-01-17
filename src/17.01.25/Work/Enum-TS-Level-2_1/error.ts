console.warn("Enum-TS-Level-2_1");
// enum mit HTML-Error_Codes

enum ErrorCodes {
  OK = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}

function showHtmlError() {
  let randomNumber = Math.floor(Math.random() * 5) + 1;

  if (randomNumber == 0 || randomNumber == 1 || randomNumber == 2) {
    console.log(ErrorCodes.OK);
  } else if (randomNumber == 3) {
    console.log(ErrorCodes.Redirect);
  } else if (randomNumber == 4) {
    console.log(ErrorCodes.BadRequest);
  } else {
    console.log(ErrorCodes.InternalServerError);
  }
}
showHtmlError();
