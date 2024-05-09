
//Sukurti du kintamuosius.Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus(Jonas Jonaitis).Atspausdinti trumpesnį stringą.

//    Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus(nebūtinai tikrus).Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį:
//"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".


console.log("\n-------Pirma uzduotis-----------\n");


const name = "Jonas";
const surname = "Jonaitis";

if (name.length > surname.length) {
    console.log(surname);
} else {
    console.log(name);
}

console.log("\n-----------Antra uzduotis----------\n");

const name1 = "Tomas";
const surname1 = "Konopackis";
const bornYear = 1989;
const year = 2024;

console.log("Aš esu " + name1 + " " + surname1 + ". Man yra " + (year - bornYear) + "metai(ų).");