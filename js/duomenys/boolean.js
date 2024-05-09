/*
BOOLEAN - logines reiksmes

-   true
-   false

Boolean logikos operatoriai
-   && (and)
-   || (or)
-   ! (not)

Kaip interpretuojami kiti duomenu tipai ir ju reiksmes, kai jos naudojamos lyg boolean'ai? 

Stringai:
-   jei tuscias - false
-   jei ne tuscias - true

Number:
-   jei NaN - false
-   jei nulis - false
-   jei ne nulis - true
-   jei Infinity - true
-   jei -Infinity - true

Array:
-   jei tuscias - true
-   jei ne tuscias - true

Object:
-   jei tuscias - true
-   jei ne tsucias - true

Undefined - false
null - false


*/


const username = "Jonas";
const age = 99;
const isSunShining = true;
const hasFuel = false;

console.log(isSunShining);
console.log(hasFuel);

console.log("KAIP NEANUDOTI:", true + true);    //suveikia matematiskai true = 1 false = 0, naudoti nepagal paskirti negalima
console.log("KAIP NEANUDOTI:", true * false);

console.log("----------");
console.log(true && true);
console.log(true && false);    // jei su && (ir) bent viena is daliu yra false visos salygos rezultatas false
console.log(false && true);
console.log(false && false);

console.log("----------");
console.log(true || true);
console.log(true || false);    // jei su || (arba) bent viena is daliu yra true visos salygos rezultatas true
console.log(false || true);
console.log(false || false);

console.clear();

console.log(true && true || true);
console.log(true && true || false);

console.log(true && false || true);
console.log(true && false || false);

console.log(false && true || true);
console.log(false && true || false);

console.log(false && false || true);
console.log(false && false || false);

console.log("----------");

console.log(true || true && true);
console.log(true || true && false);

console.log(true || false && true);
console.log(true || false && false);

console.log(false || true && true);
console.log(false || true && false);

console.log(false || false && true);
console.log(false || false && false);

//Namu darbas

console.log("-------------");

console.log(true && true && true && true); // visos imanomos kombinacijos bus 128 ir patikrinti

console.log(!true);
console.log(!false);



