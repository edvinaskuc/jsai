let amzius = prompt("Įveskite savo amžių");

if (isNaN(amzius)) {
  console.log("Netinkamai nurodytas amžius, amžius privalo būti skaičius.");
} else if (amzius < 0) {
  console.log("Įvestas amžius yra per mažas.");
} else if (amzius < 6) {
  console.log("į mokyklą neina.");
} else if (amzius < 7) {
  console.log("Į mokyklą tikriausiai neina, tačiau gali būti ir pirmokas.");
} else if (amzius < 10) {
  console.log("eina į pradinę klasę");
} else if (amzius < 11) {
  console.log("Tikriausiai mokosi pradinėje, tačiau gali būti ir penktokas.");
} else if (amzius < 14) {
  console.log("eina į pagrindinę");
} else if (amzius < 15) {
  console.log(
    "Tikriausiai mokosi pagrindinėje, tačiau gali būti ir devintokas."
  );
} else if (amzius <= 18) {
  console.log("eina į gimnaziją");
} else if (amzius <= 19) {
  console.log(
    "Tikriausiai mokosi gimnazijoje, tačiau mokyklą gali būti ir baigęs."
  );
} else if (amzius <= 19) {
  console.log("mokyklą baigė.");
} else if ((amzius) => 19) {
  console.log("mokyklą baigė.");
} else if ((amzius) => 120) {
  console.log("įvestas amžius yra per didelis..");
} else {
  console.log("Netinkamai nurodytas amžius, amžius privalo būti skaičius.");
}

// 8. Jeigu įvestas ne amžius (t.y. ne skaičius), tai parašyti: "Netinkamai nurodytas amžius, amžius privalo būti skaičius."
// 9. Panaudoti prompt funkciją amžiui įvesti.
