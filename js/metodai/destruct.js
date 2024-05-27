/*
Destrukturizavimas
gimininga 'siela' - spread
*/

const a = [10, 2, 8, 4, 6];
const first = a[0];
const second = a[1];
const rest = a.slice(2);

console.log(first, second, rest);

const b = [10, 2];
const first1 = b[0];
const second1 = b[1];
const rest1 = b.slice(2);

console.log(first1, second1, rest1);
console.clear();

const dict = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau'];
const [word1, word2, ...restOfDict] = dict;

console.log(word1);
console.log(word2);
console.log(restOfDict);

function giveMeTwoNumbers() {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return [a, b];
}

const res1 = giveMeTwoNumbers();
const [n1, n2] = giveMeTwoNumbers()

console.log(n1 + n2);
console.clear();

const person = {
    name: 'Ona',
    age: 22,
    isMarried: true,
};

const userName = person.name;
const userAge = person.age;
const userIsMarried = person.isMarried;

const { age, name, ...restDetails } = person;
console.log(age);
console.log(name);
console.log(restDetails);

function food() {
    const list = [
        { name1: 'cepelinai', count: 2 },
        { name1: 'saltibarsciai', count: 1 },
        { name1: 'svogunu laiskai', count: 10 },
    ];
    return list[Math.floor(Math.random() * list.length)];
}


// const { name1: kitasPavadinimas } = food();
// console.log(kitasPavadinimas);
const { name1: f1name1, count: f1count } = food()
const sentence1 = `Valgysi: ${f1name1}; Kiekis: ${f1count}`;
console.log(sentence1);

const { name1: f1name2, count: f1count2 } = food()
const sentence2 = `Valgysi: ${f1name2}; Kiekis: ${f1count2}`;
console.log(sentence2);

function drinks(...list) {
    console.log(list);
    return `Gerimu kiekis: ${list.length}`;
}

console.log(drinks('a', 'b', 'c'));

function iLike(name, list) {
    console.log(list.length);
    return `${name} mesgsta ${list.length} spalvas`;

}

console.log(iLike('Jonas', 'red', 'blue'));
console.log(iLike('Maryte', 'white', 'black', 'grey'));

function nextFunc(a, b, c, ...restParams) {
    return null;
}

const marks = [10, 2, 8, 4, 6];
console.log(Math.max(...marks));
console.log(Math.min(...marks));
console.log(...marks);