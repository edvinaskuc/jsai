// AMŽIUS
// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

let amzius = 122;

if (amzius < 0) {
  console.log("Įvestas amžius yra per mažas.");
} else if (amzius <= 6) {
  console.log("į mokyklą neina.");
} else if (amzius <= 10) {
  console.log("eina į pradinę klasę");
} else if (amzius <= 14) {
  console.log("eina į pagrindinę");
} else if (amzius <= 18) {
  console.log("eina į gimnaziją");
} else if (amzius <= 19) {
  console.log("mokyklą baigė.");
} else if ((amzius) => 120) {
  console.log("įvestas amžius yra per didelis..");
} else {
  console.log("Įveskite savo amžių.");
}

// 6.1. Jeigu amžius yra mažiau nei 0, tai parašyti jog įvestas amžius yra per mažas.
// 6.2. Jeigu amžius yra daugau nei 120, tai parašyti jog įvestas amžius yra per didelis.

// 7.1. Jeigu amžius yra 6 metai, tai parašyti: "Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas."
// 7.2. Jeigu amžius yra 10 metai, tai parašyti: "Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas."
// 7.3. Jeigu amžius yra 14 metai, tai parašyti: "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
// 7.4. Jeigu amžius yra 18 metai, tai parašyti: "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."

// let amzius = 19

// if(amzius < 6) {
//     console.log('į mokyklą neina')
// } else if(amzius <= 10) {
//     console.log('eina į pradinę klasę')
// } else if(amzius <= 14) {
//     console.log('eina į pagrindine')
// } else if(amzius <= 18) {
//     console.log('eina į gimnazija')
// } else {
//     console.log('mokyklą baigė')
// }
