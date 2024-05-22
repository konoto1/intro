/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);

// Math bibliotkeos metodai

console.log('\nAbs-----------')
console.log(Math.abs(7));
console.log(Math.abs(-7));
console.log(Math.abs(-3.14));
console.log(Math.abs(-Math.PI));
console.log(Math.abs(Math.PI));
//Math.abs() grazina skaiciaus teigiama israiska

console.log('\nCbrt-----------');
console.log(Math.cbrt(8));
console.log(Math.cbrt(27));
console.log(Math.cbrt(64));
console.log(Math.cbrt(125));

console.log('\nCeil--------------');
console.log(Math.ceil(5));
console.log(Math.ceil(0));
console.log(Math.ceil(-5));
console.log(Math.ceil(-3.84));
console.log(Math.ceil(3.14));
// apvalina i didesne puse

console.log('\nFloor--------------');
console.log(Math.floor(-3.14));
console.log(Math.floor(3.84));
//apvalina i mazesne puse

console.log('\nRound--------------');
console.log(Math.round(5));
console.log(Math.round(0));
console.log(Math.round(-5));
console.log(Math.round(-3.14));
console.log(Math.round(3.14));
console.log(Math.round(3.000001));
console.log(Math.round(3.9999999));
console.log(Math.round(3.5000001));
console.log(Math.round(3.500000));
console.log(Math.round(3.499999));
// aapvalina pagal matematikos taisykles

console.log('\nTrunc------------');
console.log(Math.trunc(3.000001));
console.log(Math.trunc(3.9999999));
console.log(Math.trunc(3.5000001));
console.log(Math.trunc(3.500000));
console.log(Math.trunc(3.499999));
//grazina tik sveikaja skaiciaus dali

console.log('\nExp-------------');
console.log(Math.exp(17));
console.log(Math.E ** 17);

console.log('\nFround-------------');
console.log(Math.fround(5));
console.log(Math.fround(0));
console.log(Math.fround(-5));
console.log(Math.fround(-3.1415));
console.log(Math.fround(3.1415));
console.log(Math.fround(3.1));

console.log('\nHypot-------------');
console.log(Math.hypot(3, 4));

console.log('\nImul-------------');
console.log(Math.imul(10, 17));

console.log('\nMax----------');
console.log(Math.max(1, 3));
console.log(Math.max(1, 3, 10, -5));
console.log(Math.max(1, -1));

console.log('\nMin----------');
console.log(Math.min(1, 3));
console.log(Math.min(1, 3, 10, -5));
console.log(Math.min(1, -1));

console.log('\nPow----------');
console.log(Math.pow(2, 3));
console.log(2 ** 3);

console.log('\nRandom----------');
// intervale nuo 0 iki 1, [0..1), generuoja random reiksmes.
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

console.log('\nSign----------');
console.log(Math.sign(5));
console.log(Math.sign(-5));
console.log(Math.sign(0));
console.log(Math.sign(-0));
console.log(Math.sign(NaN));
// grazina vieneta arba (-) vieneta iskyrus nuli.


