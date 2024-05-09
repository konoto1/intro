/*
duomens tipo nustatymas

TYPEOF (duomenns tipo nustatymo operatorius)

*/

function empty() {
}


console.log(typeof 5);
console.log(typeof 3.1415);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof "");
console.log(typeof "labas");
console.log(typeof " ");
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof [1, 2, 3]);
console.log(typeof ["a", "b", "c"]);
console.log(typeof {});
console.log(typeof empty);



// Kai norite patikrinti ar TAI yra masyvas [array]
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray("labas"));
console.log(Array.isArray(true));
console.log(Array.isArray(empty));


console.log("------------");

const tikrinamasDalykas = null;
if (tikrinamasDalykas === null) {
    console.log("taip");
} else {
    console.log("ne");
}
console.clear();


const a = 12526;
console.log(a);


if (typeof a === 'string') {
    console.log("as dirbu su stringu");
} else {
    console.log("as dirbu ne su stringu ");
}

console.clear();

const x = 5;
const y = 7;

if (typeof x !== "number") {
    console.log("error x");
} else if (typeof y !== "number") {
    console.log("error y");
} else {
    console.log("viskas ok");
}

console.log(x && y);
