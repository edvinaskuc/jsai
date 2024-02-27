console.groupCollapsed("pirma uzduotis");

let tekstas1 = "pirmas tekstas";
let tekstas2 = "antras tekstas";

if (tekstas1 === tekstas2) {
  console.log("Tekstai yra lygūs");
} else {
  console.log("Tekstai nėra lygūs");
}

console.groupEnd;

console.groupCollapsed("antra uzduotis");

let num = 10;
let text = "10";

console.log(num === text);
console.log(num == text);
console.log(num != text);

console.groupCollapsed("trecia uzduotis");

let currentBalance1 = 50;
let transaction1 = -50;
console.log(currentBalance1 >= -transaction1);

let currentBalance2 = 50;
let transaction2 = 50;
console.log(currentBalance2 >= transaction2);

let currentBalance3 = 50;
let transaction3 = -51;
console.log(currentBalance3 >= -transaction3);

let currentBalance4 = 50;
let transaction4 = 51;
console.log(currentBalance4 >= transaction4);

console.groupCollapsed("ketvirta uzduotis");

let number1 = 10;
let number2 = 5;

if (number1 % number2 === 0) {
  console.log("Skaičiai dalinasi be liekanos");
} else {
  console.log("Skaičiai nedalinasi be liekanos");
}

console.groupEnd;
