/*
IF  - palyginimas
 Palyginimo operatoriai:
 Visi: <, >, <=, >=, ==, !=, ===, !==
 Naudotini: <, >, <=, >=, ===, !==
 Nenaudotini: ==, !=

Sablonai:
if () {}
if () {} else {}
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}

*/

const age = 20;
const ageLimit = 18;
if (age < ageLimit) {
    console.log  ("sorry, go home!! not your evening!! :D");
}else {
        console.log ("You ar welocome!!!");
    }

console.clear ();

if (4 !== 2) {
console.log ("Taip, daugiau");
} else {
    console.log ("Ne, maziau");
}

console.clear ();

const color1 = "red";
const color2 = "black";
const color3 = "orange";
const color4 = "green";
const color5 = "yellow";
const color6 = "violet";
let translation = "";

function colorTranslation(color) {
   let translation = "";
   if (color === "red") {
    translation = "Raudona";
   } else if (color === "black"){
    translation = "Juoda";
   } else if (color === "orange"){
    translation = "oranzine";
   } else if (color === "green"){
    translation = "Zalias";
   } else if (color === "yellow"){
    translation = "Geltonas";
   } else if (color === "violet"){
    translation = "Violetine";
   }
   else {
    translation = "Nezinau tokios spalvos";
   }
   return color + "-> " + translation;
}

console.log(colorTranslation("red"));
console.log(colorTranslation("black"));
console.log(colorTranslation("orange"));
console.log(colorTranslation("green"));
console.log(colorTranslation("yellow"));
console.log(colorTranslation("violet"));
console.log(colorTranslation("pink"));







