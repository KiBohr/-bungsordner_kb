console.log("halloo");

// ! LifeCoding                                             

// const number = 15
// Math.sqrt(number)
// console.log(Math.sqrt(number));

// const maxNumber = Math.max(1,3,5,6,2,776,3,65,7)
// console.log(maxNumber);


// // *   objects          

// const dune = {
//     title: "Dune",
//     year: 2021,
//     director: "Denis Villeneuve",
//     description: "Leute machen Sachen im Sand",
//     actors: ["Timothe Chalamet", "Zendaya"],
// }

// // Verändern von Eigenschaften
// dune.title = "Dune: Part One";

// // Zugriff auf Eigenschaften
// dune.title

// // oder so
// dune["title"]

// //? Object.keys()
// console.log(Object.keys(dune));

// //? Object.values()
// console.log(Object.values(dune));

// //? Object.entries()
// console.log(Object.entries(dune));

// //* Arrays und Objekte

// const jurassicPark = {
//     title: "Jurassic Park",
//     year: 1993,
//     director: "Steven Spielberg",
//     description: "Rawr",
//     actors: ["Jeff Goldblum"],
// }

// type Movie = { title: string, year: number, director: string, description: string, actors: string[] }

// const movies: Movie[] = [dune, jurassicPark]

// console.log(movies[0].actors);

// ! Übungen                                    

// * Math-TS-Level-1_4

const minNumber = Math.min(399,10,186,45,9,171,491,128,24,288,56,444,217,111,187,89,270,485,481,179,290,14,292,250,463,189,434,184,124,443,119,23,453,305,68,477,58,90,347,147,64,259,131,153,29,116)
console.log(minNumber); // 9

const maxNumbers = Math.max(399,10,186,45,9,171,491,128,24,288,56,444,217,111,187,89,270,485,481,179,290,14,292,250,463,189,434,184,124,443,119,23,453,305,68,477,58,90,347,147,64,259,131,153,29,116)
console.log(maxNumbers); // 491


// * Objekte-TS-Level-1_3

type Apple = {
    color: string;
    size: string;
  };
  
  const redApple: Apple = { color: 'red', size: 'big' };

  const greenApple: Apple = { color: 'green', size: 'small' };

  const yellowApple: Apple = { color: 'yellow', size: 'big' };

  const apples: Apple[] = [redApple, greenApple, yellowApple];


apples.forEach(function(aApple){
    console.log(aApple.size); 
})

apples.forEach(function (aApple){
    console.log(aApple.color);
})

// * Objekte-TS-Level-1_4
//? auf Objekte in einem Array zugreifen

type Pet = {
    tiertyp: string;
    namen: string[];
  };
  
  const unsereHaustiere: Pet[] = [
    {
      tiertyp: 'Katze',
      namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
      tiertyp: 'Hunde',
      namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    }
  ];

// ? nur "Nala" und "Droopy"
console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);

// ? alle Hundenamen
console.log(unsereHaustiere[1].namen);

// ? Droopy zu Snoopy
unsereHaustiere[1].namen[2] = "Snoopy"
console.log(unsereHaustiere);

// ? Dinky in Pinky
unsereHaustiere[0].namen[2] = "Pinky"
console.log(unsereHaustiere[0]);

// ? ein neues Array ergänzen
unsereHaustiere.push({ tiertyp: "Vogel", namen: ["Birdy", "Gisele"]})
console.log(unsereHaustiere);

// * Objekte-TS-Level-1_5
//? auf Objekt-Inhalte zugreifen

type Lager = {
    schreibtisch: {
        schublade: string;
    };
    schrank: {
        "ObereSchublade": {
            Ordner1: string;
            Ordner2: string;
        };
        "Untere Schublade": string;
    };
};

const unserLager: Lager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "ObereSchublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};

// ? Geheimnisse
console.log(unserLager.schrank.ObereSchublade.Ordner2);

// ? Cola
console.log(unserLager.schrank["Untere Schublade"]);

// ? Hefter
console.log(unserLager.schreibtisch.schublade);

// * Objekte-TS-Level-1_6
//? Zugriff auf Objekte

type Musik = {
    kunstler: string;
    title: string;
    release_jahr: number;
    formate: string[];
    gold: boolean;
  };
  
  const meineTopVier: Musik[] = [
    {
      kunstler: 'The Beatles',
      title: 'Abbey Road',
      release_jahr: 1969,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    },
    {
      kunstler: 'Pink Floyd',
      title: 'Dark Side of the Moon',
      release_jahr: 1978,
      formate: ['CS', 'CD', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Led Zeppelin',
      title: 'Led Zeppelin IV',
      release_jahr: 1971,
      formate: ['CS', 'LP', 'Download'],
      gold: true
    },
    {
      kunstler: 'Metallica',
      title: 'Kill ’Em All und Ride the Lightning',
      release_jahr: 1983,
      formate: ['LP', 'CD', 'MC', 'Download'],
      gold: true
    }
  ];

//   ? Beatles
console.log(meineTopVier[0].kunstler);

// ? "Download"
console.log(meineTopVier[1].formate[3]);

// ? pink floyd true
console.log(meineTopVier[1].gold);

// ? 1971 + 1983
console.log(meineTopVier[2].release_jahr, meineTopVier[3].release_jahr);

// ? "MC"
console.log(meineTopVier[3].formate[2]);

// ? "Ride"
const sliceRide = meineTopVier[3].title.slice(17,21)
console.log(sliceRide);

// ? neues Objekt hinzufügen
meineTopVier.push( {
    kunstler: 'Chappell Roan',
    title: 'California',
    release_jahr: 2023,
    formate: ['Download', 'Schallplatte'],
    gold: false,
})
console.log(meineTopVier);

// * Objekte-TS-Level-2_2

type PeriodActive = {
    start: number;
    end: number | string;
    extra?: number;
};

type Singer = {
    name: string;
    country: string;
    period_active: PeriodActive;
    genre: string;
};

const singers: Singer[] = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },

    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },

    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },

    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },

    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },

    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },

    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },

    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

// - mit Hilfe
// ? alphabetisch sortiert nach Namen
const sortedSingers = [...singers].sort((a: Singer, b: Singer) => {
    return a.name.localeCompare(b.name)
})
console.log(sortedSingers)


//? sortiert nach Start
const sortByStart = [...singers].sort((a: Singer, b: Singer) => {
    return a.period_active.start - b.period_active.start;
})
console.log(sortByStart);

// * BONUS: Math-TS-Level-2_4

type WeatherData = {
    date: string;
    temperature: number;
    temperature_min: number;
    temperature_max: number;
    precipitation: number;
    snowfall: number | null;
    snowdepth: number;
    winddirection: number | null;
    windspeed: number;
    peakgust: number;
    sunshine: number;
    pressure: number;
  };
  
  type Weather = { meta: { source: string }; data: WeatherData[] };
  const weather: Weather = {
    meta: {
      source: 'National Oceanic and Atmospheric Administration, Deutscher Wetterdienst'
    },
    data: [
      {
        date: '2019-05-25',
        temperature: 13.9,
        temperature_min: 6.5,
        temperature_max: 19.9,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: 275,
        windspeed: 6.9,
        peakgust: 26,
        sunshine: 465,
        pressure: 1017.2
      },
      {
        date: '2019-05-26',
        temperature: 16.1,
        temperature_min: 8.9,
        temperature_max: 20.8,
        precipitation: 1.3,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 15,
        peakgust: 38.9,
        sunshine: 167,
        pressure: 1013.6
      },
      {
        date: '2019-05-27',
        temperature: 15.8,
        temperature_min: 8.9,
        temperature_max: 20.2,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: 263,
        windspeed: 13.1,
        peakgust: 35.3,
        sunshine: 281,
        pressure: 1009.1
      },
      {
        date: '2019-05-28',
        temperature: 12.3,
        temperature_min: 8.7,
        temperature_max: 16.1,
        precipitation: 3.3,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 9.8,
        peakgust: 48.2,
        sunshine: 98,
        pressure: 1008.8
      },
      {
        date: '2019-05-29',
        temperature: 13.8,
        temperature_min: 3.7,
        temperature_max: 19.9,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 8.4,
        peakgust: 29.2,
        sunshine: 879,
        pressure: 1020.2
      },
      {
        date: '2019-05-30',
        temperature: 16.5,
        temperature_min: 12.3,
        temperature_max: 20.9,
        precipitation: 0.2,
        snowfall: null,
        snowdepth: 0,
        winddirection: 196,
        windspeed: 16.4,
        peakgust: 38.2,
        sunshine: 69,
        pressure: 1022.3
      },
      {
        date: '2019-05-31',
        temperature: 18.6,
        temperature_min: 11.5,
        temperature_max: 22.9,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 14.2,
        peakgust: 43.9,
        sunshine: 681,
        pressure: 1024.1
      },
      {
        date: '2019-06-01',
        temperature: 19.8,
        temperature_min: 10.4,
        temperature_max: 27.7,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 7.9,
        peakgust: 25.2,
        sunshine: 796,
        pressure: 1021.3
      },
      {
        date: '2019-06-02',
        temperature: 24.4,
        temperature_min: 14.9,
        temperature_max: 31.8,
        precipitation: 10.1,
        snowfall: null,
        snowdepth: 0,
        winddirection: 169,
        windspeed: 17.3,
        peakgust: 46.4,
        sunshine: 883,
        pressure: 1013.8
      },
      {
        date: '2019-06-03',
        temperature: 19.7,
        temperature_min: 15.8,
        temperature_max: 23.3,
        precipitation: 0.5,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 10.8,
        peakgust: 46.8,
        sunshine: 136,
        pressure: 1012.6
      },
      {
        date: '2019-06-04',
        temperature: 22,
        temperature_min: 13.4,
        temperature_max: 28.4,
        precipitation: 0.3,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 11.1,
        peakgust: 50.8,
        sunshine: 498,
        pressure: 1009.6
      },
      {
        date: '2019-06-05',
        temperature: 22.2,
        temperature_min: 15.8,
        temperature_max: 26.9,
        precipitation: 10.5,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 10.8,
        peakgust: 69.8,
        sunshine: 576,
        pressure: 1006
      },
      {
        date: '2019-06-06',
        temperature: 15.3,
        temperature_min: 9.9,
        temperature_max: 19.5,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: 226,
        windspeed: 15.1,
        peakgust: 59.8,
        sunshine: 304,
        pressure: 1010.9
      },
      {
        date: '2019-06-07',
        temperature: 16.6,
        temperature_min: 9.1,
        temperature_max: 25.7,
        precipitation: 2.5,
        snowfall: null,
        snowdepth: 0,
        winddirection: 145,
        windspeed: 19.9,
        peakgust: 61.2,
        sunshine: 602,
        pressure: 1010.5
      },
      {
        date: '2019-06-08',
        temperature: 15.4,
        temperature_min: 12.2,
        temperature_max: 19.6,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: 207,
        windspeed: 31.6,
        peakgust: 81,
        sunshine: 183,
        pressure: 1018.2
      },
      {
        date: '2019-06-09',
        temperature: 17.1,
        temperature_min: 9.5,
        temperature_max: 22.5,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 10.7,
        peakgust: 20.9,
        sunshine: 481,
        pressure: 1021.6
      },
      {
        date: '2019-06-10',
        temperature: 18.4,
        temperature_min: 13.5,
        temperature_max: 24.6,
        precipitation: 0.6,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 7.3,
        peakgust: 34.6,
        sunshine: 315,
        pressure: 1012
      },
      {
        date: '2019-06-11',
        temperature: 17.1,
        temperature_min: 13.1,
        temperature_max: 21.9,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 10.7,
        peakgust: 27.7,
        sunshine: 463,
        pressure: 1011.4
      },
      {
        date: '2019-06-12',
        temperature: 17.3,
        temperature_min: 13.1,
        temperature_max: 21.6,
        precipitation: 7,
        snowfall: null,
        snowdepth: 0,
        winddirection: 162,
        windspeed: 15.9,
        peakgust: 50.8,
        sunshine: 458,
        pressure: 1009.9
      },
      {
        date: '2019-06-13',
        temperature: 17.1,
        temperature_min: 12.7,
        temperature_max: 21.9,
        precipitation: 0.7,
        snowfall: null,
        snowdepth: 0,
        winddirection: 192,
        windspeed: 19.9,
        peakgust: 50,
        sunshine: 490,
        pressure: 1012
      },
      {
        date: '2019-06-14',
        temperature: 20,
        temperature_min: 10.4,
        temperature_max: 26.4,
        precipitation: 1.6,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 8.4,
        peakgust: 22.3,
        sunshine: 701,
        pressure: 1013.3
      },
      {
        date: '2019-06-15',
        temperature: 19.1,
        temperature_min: 15.2,
        temperature_max: 23.2,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 11.7,
        peakgust: 38.9,
        sunshine: 279,
        pressure: 1012.5
      },
      {
        date: '2019-06-16',
        temperature: 18.8,
        temperature_min: 12.5,
        temperature_max: 23.2,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 13.1,
        peakgust: 45.7,
        sunshine: 753,
        pressure: 1019.2
      },
      {
        date: '2019-06-17',
        temperature: 20.6,
        temperature_min: 11,
        temperature_max: 27.3,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 8.1,
        peakgust: 29.2,
        sunshine: 706,
        pressure: 1019.2
      },
      {
        date: '2019-06-18',
        temperature: 22.7,
        temperature_min: 12.7,
        temperature_max: 29.7,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 6.8,
        peakgust: 33.5,
        sunshine: 627,
        pressure: 1013.6
      },
      {
        date: '2019-06-19',
        temperature: 22.9,
        temperature_min: 16.5,
        temperature_max: 29.6,
        precipitation: 13.7,
        snowfall: null,
        snowdepth: 0,
        winddirection: 183,
        windspeed: 15.7,
        peakgust: 74.2,
        sunshine: 539,
        pressure: 1007.8
      },
      {
        date: '2019-06-20',
        temperature: 17.9,
        temperature_min: 13.5,
        temperature_max: 21.9,
        precipitation: 1.3,
        snowfall: null,
        snowdepth: 0,
        winddirection: 227,
        windspeed: 13.1,
        peakgust: 37.1,
        sunshine: 156,
        pressure: 1011.7
      },
      {
        date: '2019-06-21',
        temperature: 16.9,
        temperature_min: 11.4,
        temperature_max: 22.5,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 10.3,
        peakgust: 30.2,
        sunshine: 643,
        pressure: 1018.5
      },
      {
        date: '2019-06-22',
        temperature: 19.8,
        temperature_min: 10.7,
        temperature_max: 26.5,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 13.6,
        peakgust: 45,
        sunshine: 778,
        pressure: 1020.7
      },
      {
        date: '2019-06-23',
        temperature: 24.1,
        temperature_min: 14.4,
        temperature_max: 31.4,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: null,
        windspeed: 11.8,
        peakgust: 42.5,
        sunshine: 736,
        pressure: 1017.9
      },
      {
        date: '2019-06-24',
        temperature: 26.9,
        temperature_min: 19,
        temperature_max: 32.9,
        precipitation: 0,
        snowfall: null,
        snowdepth: 0,
        winddirection: 120,
        windspeed: 14.7,
        peakgust: 40,
        sunshine: 779,
        pressure: 1018
      }
    ]
  };

//   function, die max und min Temperatur errechnet

function findRecordTemperatures(weatherData: Weather){

    const maxTemperatures = weatherData.data.map(function(element){

        return element.temperature_max
    })
    const maxRecordTemperature = Math.max(...maxTemperatures)

    console.log(`Höchste Temperatur: ${maxRecordTemperature}`);

    const minTemperatures = weather.data.map(function(element){

        return element.temperature_min
    })

    const minRecordTemperature = Math.min(...minTemperatures)

    console.log(`Niedrigste Temperatur: ${minRecordTemperature}`);
}

findRecordTemperatures(weather)



