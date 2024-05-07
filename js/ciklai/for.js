/*
FOR - pagrindinis ciklas (en. loop);
*/

//atstumas: 100m
//zingsnis: 1m
//zingsniu: 80-200


// ciferbltas: 60 padalu
// trukme padalos: 1s
// laiko? 60s

for (let i = 0; i < 10; i++) {   // pirma dalis i=0 nuo kokios skaiciaus pradeti, i<10 iki kokio skaiciaus testi cikla, i++ kokio zingsniu skaiciuoti
    console.log(i);
}

for (let i = 200; i > 100; i -= 23) {
    console.log(i / 10);                //tesingai skaiciuoja tik sveikuosius, todel norint gero atsakymo galutini atsakyma reikia versti i desimtai etc.
}

console.clear();

const colors = ["balta", "juoda", "geltona", "zalia"]


for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[i]);
}

console.log("-------------");

for (let i = colors.length - 1; i >= 0; i--) {
    console.log(i, colors[i]);
}

for (let i = 0; i < colors.length; i++) {
    console.log(i, colors[colors.length - 1 - i]);
}


const marks = [10, 2, 8, 4, 6];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    console.log(i, "-->", marks[i]);
    sum += marks[i];
}

console.log(sum / marks.length);

console.clear();

const jonas = [];
const maryte = [10, 2];
const petras = [9, 8, 7];
const ona = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function marksAverage(marks) {
    if (marks.length === 0) {
        return "Nera pazymiu";
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

console.log(marksAverage(jonas));
console.log(marksAverage(maryte));
console.log(marksAverage(petras));
console.log(marksAverage(ona));
