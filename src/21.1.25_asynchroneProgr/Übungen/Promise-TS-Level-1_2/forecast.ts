import { WeatherType } from "./weather_types";

const weatherForecast = new Promise((resolve, reject) => {
  const randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber <= 6) {
    return resolve(WeatherType[randomNumber]);
  } else {
    return reject("Weather forecast could not be determined");
  }
});

weatherForecast
  .then(() => {
    console.log(weatherForecast);
  })
  .catch(() => {
    console.error("Weather could not be determined");
  });
