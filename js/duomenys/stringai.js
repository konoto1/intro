/*
STRING - tekstas, tekstiniu simboliu grandinele
iniciavimas '(vienguba)', "(dviguba)",

*/

const name = "Jonas";
console.log(name);

const name2 = "Maryte";
console.log (name2);

const sakinys = "Labas rytas, Lietuva!!!";
console.log (sakinys);

/*  
vienguba (') kabute.
dviguba (") kabute.
*/

const kabutes1 = "vienguba (') kabute";
console.log (kabutes1);

const kabutes2 = 'dviguba (") kabute';
console.log (kabutes2);

const kabutes3 = "vienguba (') ir dvigubos" + ' (") kabutes';
console.log (kabutes3);

const kabutes1_1 = 'vienguba (\') ir dvigubos (") kabutes';
const kabutes2_2 = "vienguba (') ir dvigubos (\") kabutes";
const kabutes3_1 = 'vienguba (\') ir dvigubos (\") kabutes';
const kabutes3_2 = "vienguba (\') ir dvigubos (\") kabutes";

console.log (kabutes1_1);
console.log (kabutes2_2);
console.log (kabutes3_1);
console.log (kabutes3_2);

/*
Pinigines turinys: 0;
Pinigine papildyta: 10;
Pinigines turinys: 10;
Pinigine papildyta: 90;
Pinigines turinys: 100;
*/

console.clear ();

const txt1 = "Pinigines turinys:";
const txt2 = "Pinigine papildyta:";
let x = 0;          // pinigines turinys = x.

console.log (txt1, x,"€");
x += 10;
console.log (txt2, x,"€");
console.log (txt1, x,"€");
x += 90;
console.log (txt2, x - 10,"€");
console.log (txt1, x,"€");













