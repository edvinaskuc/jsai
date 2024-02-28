// AMŽIUS
// Pagal amžiu surašyti į kurią klasė eina mokinys:
// 1. Iki 6 metų į mokyklą neina.
// 2. 7-10 metų eina į pradinę klasę.
// 3. 11-14 metų eina į pagrindinę.
// 4. 15-18 metų eina į gimnaziją.
// 5. 19+ mokyklą baigė.

let amzius = 19;

if (amzius < 6) {
  console.log("į mokyklą neina.");
} else if ((amzius) => 7 && amzius <= 10) {
  console.log("eina į pradinę klasę");
} else if ((amzius) => 11 && amzius <= 14) {
  console.log("eina į pagrindinę");
} else if ((amzius) => 15 && amzius <= 18) {
  console.log("eina į gimnaziją");
} else if ((amzius) => 19) {
  console.log("mokyklą baigė.");
} else {
  console.log("Įveskite savo amžių.");
}
