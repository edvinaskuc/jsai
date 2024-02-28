// SLAPTAŽODIS:
// 1. Jeigu slaptažodis yra trumpesnis už 16 simbolių, tai parašyti jog „Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
// 2. Jeigu slaptažodis yra ilgesnis už 15 simbolių, tai:
// 2.1. Patikrinti ar jis yra ilgesnis už 20 simbolių. Jeigu ilgesnis, tai parašyti: „Slaptažodis tinkamas".
// 2.2. Jeigu jis nėra ilgesnis už 20 simbolių, tai parašyti jog: „Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."

// 3. Jeigu slaptažodis neturi grotažymių (#), tai parašyti: „Slaptažodis privalo turėti grotažymes"

let password = "slaptažodis";

if (password.length < 16) {
  console.log(
    "Slaptažodis yra per trumpas. Jis privalo būti bent 16 simbolių ilgumo."
  );
} else if (password.length > 15) {
  if (password.length > 20) {
    console.log("Slaptažodis tinkamas");
  } else {
    console.log(
      "Slaptažodis yra tinkamas. Tačiau rekomenduojama jog jis būtų bent 21 simbolio ilgumo."
    );
  }
}

if (!password.includes("#")) {
  console.log("Slaptažodis privalo turėti grotažymes");
} else {
  console.log("Slaptažodis tinkamas");
}
