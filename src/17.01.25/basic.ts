// ! Übungen
console.warn("Übungen");

// * Enum-TS-Level-1_1

enum Monate {
  January = 1,
  February = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  Oktober = 10,
  November = 11,
  Dezember = 12,
}

for (const month in Monate) {
  console.log(Monate[month]);
}
