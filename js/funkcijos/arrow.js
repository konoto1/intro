/*
ARROW Function = rodykline funkcija, lamda funkcija

*/

const n1 = 7;
const n2 = 5;

// function declaration
function sum(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// kintamajam priskiriama anonimine funkcija

const diff = function (a, b) {
    return a - b;
}

console.log(`${n1} + ${n2} = ${diff(n1, n2)}`);

const multi = function (a, b) {
    return a * b;
}

console.log(`${n1} + ${n2} = ${diff(n1, n2)}`);

// arrow function

const multi1 = (a, b) => {
    return a * b;
}

// arrow function
// jeigu, logikos bloke yra tik 1 procedura
// tai galima nerasyti return {return}

const div = (a, b) => a / b;

console.log(`${n1} + ${n2} = ${div(n1, n2)}`);


// arrow function
// jeigu parametru bloke yra tik 1 parametras
// galima nerasyti skliausteliu

const square = n => n * n;

console.log(`${n1} * ${n1} = ${square(n1)}`);
console.log(`${n2} * ${n2} = ${square(n2)}`);

console.clear();

const hi = name => `Hi, my name is ${name} !`;

console.log(hi('Jonas'));
console.log(hi('Maryte'));

const abbr = (firstname, lastname) => firstname[0] + '.' + lastname[0] + '.';
const abbr2 = (a, b) => `${a[0]}.${b[0]}.`;


console.log(abbr('Chuck', 'Norris'));
console.log(abbr2('Chuck', 'Norris'));
console.log(abbr('Jonas', 'Kazlauskas'));
console.log(abbr2('Jonas', 'Kazlauskas'));

console.clear();

console.log(vienas());

function vienas() {
    return 'VIENAS';
}

console.log(vienas());

//console.log(antras());

const antras = () => 'Antras';
console.log(antras());

// JS pirmu etapu patikrina klaidas, ir isimena funkciju pavadinimus, bet ne kintamuju, antru ratu pradeda logikos vykdyma.
