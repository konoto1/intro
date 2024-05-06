/*
NUMBERS
- sveikieji/desimtainiai
- tegiami/neigiami
- normalus/"ne normalus" 
"Ne normalus":
-   Infinity
-   Infinity(-)(neigiama)
-    NaN (not-a-number)

Matematiniai operatoriai:
-   aritmetiniai +, -, *, /, **, %, **, ++, -- kelimas laipsniu, % liekana
-   prisikirimo +=, -=, *=, =/, =**, =%, 
*/

const pirmas = 5;
const antras = 2;
const trecias = 100;
const ketvirtas = 200;
const penktas = 300;
const sestas = 10;

const laipsnis1 = pirmas ** antras;
const laipsnis2 = antras ** pirmas;
const liekana1 = pirmas % antras;
const liekana2 = antras % pirmas;


console.log (3.1415);
console.log (pirmas);
console.log (antras);
console.log (trecias);
console.log (ketvirtas);
console.log (penktas);
console.log (sestas);
console.log ((antras + pirmas + trecias - ketvirtas) / penktas * sestas);
console.log ("Tomas");
console.log ("Pirmadienis");
console.log ("Pirmadienis");
console.log ("Antradienis");
console.log (laipsnis1);
console.log (laipsnis2);
console.log (liekana1);
console.log (liekana2);


let pinigine = 0;
console.log (pinigine);

pinigine = 10;
console.log (pinigine);


/* 
const - naudojama visuomet kai tik imanoma kad netycia nepakeisti reiksmes kuri neturi but keiciama
let - naudojama kai negalima naudoti "const"
*/

let money = 0
console.log (money);

money = 5;
console.log (money);

money = money + 5;
console.log(money);

console.clear ();

let x = 1;
x = x + 1;
x += 1;

console.log (x);

let y = 10;
console.log (y);

y += 10 + 10 +10;
console.log (y);

y -= 5 * 4;
console.log (y);

y -= 10 + 5 * 4;
console.log (y);


let makaronai = 2;
console.log (makaronai);

makaronai = makaronai +2;
console.log (makaronai);

makaronai += 2;
console.log (makaronai);

makaronai += 1;
console.log (makaronai);

makaronai ++;
console.log(makaronai);

++makaronai;
console.log(makaronai);

console.clear();

let g = 6;
console.log(g);
console.log(g++); // jei ++ uz kintamojo pradziai spausdina tada padidina
console.log(++g); // jei ++ pries kintamaji pradziai padidina tada isspausdina
console.log(g);

