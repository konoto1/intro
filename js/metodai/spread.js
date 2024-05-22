/*
Spread operatorius
Destrukturizavimas
*/

const a = [1, 2, 3]; //value by reference
const b = a;

console.log(a);
console.log(b);

// a[0] = 44;
// console.log(a);
// console.log(b);

console.log(a.push(8));
console.log(a);
b[4] = 50;
console.log(a);

// primityvus kintamieji turi atskira atminties vieta, sudetingi dalinasi atminties vieta tarsi "adresa";

// ...spradinam array

const e = [1, 2, 3];
const f = [...e]; // nukopijuoja masyva ir jie nera susije turim atskira masyva tik pirmo lygio informacija


console.log(e);
console.log(f);

e[0] = 111;
console.log(e);

const g = [5, 6, ...e, 0, 1, 3];
console.log(g);

const h = [...e, 5, ...e]
console.log(h);

console.clear();

// ...speadinam objekta

const obj1 = { name: 'Jonas', age: 99 };
const obj2 = obj1;

obj1.name = 'Maryte';

console.log(obj1);
console.log(obj2);

obj2.age = 88;

console.log(obj1);
console.log(obj2);

const obj3 = { brand: 'Audi', model: '80' };
const obj4 = { ...obj3 };

console.log(obj3);
console.log(obj4);

obj3.brand = 'Volvo';

console.log(obj3);
console.log(obj4);

obj4.model = 'S40';

console.log(obj3);
console.log(obj4);

console.clear();

const person = {
    name: 'Petras',
    age: 77,
};

const adresas = {
    city: 'Miestas',
    stree: 'Gatve 123',
    number: 45,
};

const fullPersonDetails = {
    ...person,
    ...adresas,
    id: 1111111,
    phone: 45454545,
    ...h,
};

console.log(fullPersonDetails);
