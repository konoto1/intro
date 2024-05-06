/*
ARRAY - masyvas, sarasas, listas, matrica, kolekcija
*/


const empty = [];
console.log (empty)

const marks = [10, 2, 8, 4, 6];
console.log (marks);

const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;

/*
const sum = mark1 + mark2 + mark3 + mark4 + mark5;
const count = 5;
const average1 = sum / count;
*/
const sum2 = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
const count2 = marks.length;
const average2 = sum2 / count2;



console.log(">>>", marks[0]);
console.log(">>>", marks[1]);
console.log(">>>", marks[2]);
console.log(">>>", marks[3]);
console.log(">>>", marks[4]);

console.log("Kiekis: ", count2);
console.log("Vidurkis: ", average2);


let sum3 = 0;
sum3 += marks[0];
sum3 += marks[1];
sum3 += marks[2];
sum3 += marks[3];
sum3 += marks[4];


// ? = 30 + undefined

//sum3 = sum3 + marks[5];

let sum4 = 0;
let index = 0;
sum4 += marks[index++];
sum4 += marks[index++];
sum4 += marks[index++];
sum4 += marks[index++];
sum4 += marks[index++];


console.log(sum4);


