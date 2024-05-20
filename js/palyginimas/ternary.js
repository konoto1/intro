/*
UNARY - vienybe (a++, b--)
BINARY - dvejybe (a+b)
TERNARY - trejybe (a?b:c)
*/

let a = 0;

if (4 > 2) {
    a += 10;
} else {
    a -= 5;
}

console.log(a);

const b = 4 > 2 ? 888 : 666;
console.log(b);

const c = 4 < 2 ? 888 : 666;
console.log(c);

const d = 1 + 2 > 3 ? 4 : 5;
//const d = 3 > 3 ? 4 : 5;
//const d = false ? 4 : 5;
//const d = 5;
console.log(d);

const e = 1 > 2 ? 3 : 4 + 5;
console.log(e);

const f = 'labas'.length > 0 ? 'ilgas' : 'tuscias';
console.log(f);

const g = 'pomidoras'[2 + (1 < 2 ? 0 : 5)];
console.log(g);


/* 
Jeigu skaiicius yra teigiamas tai jy sumuojame su savimi, jei neigimas tai is jo atimame 10; 
*/

const sum = (a, b) => a + b;
const diff = (a, b) => a - b;

const n = 7;
const ats2 = n > 0 ? sum(n, n) : diff(n, 10);

// const ir let galioja tarp artimiausiu {} (scope)
let ats = null; // naudojams kai nezinome reiksmes bet planuojame ja suteikti.
if (n > 0) {
    ats = sum(n, n);
} else {
    ats = diff(n, 10);
}

console.log(ats);
console.log(ats2);

/*
Jeigu tekstas yra trumpas (t.y. iki 5simboliu),
tai grazink pirma simboli, priesingu atveju gazink paskutini.
*/

const first = s => s[0];
//const last = s => s[l.length - 1];
const last = s => s.at(-1);



const text1 = 'Laba';
const strAts = text1.length < 5 ? first(text1) : last(text1);
console.log(strAts);

const funcToCall = text1.length < 5 ? first : last;
console.log(funcToCall);
const strAts2 = funcToCall(text1);
console.log(strAts2);

const jonasMarks = [3, 6];
const maryteMarks = [10, 2, 8, 4, 6];

function emptyMarksArray() {
    return 'Studentas neturi pazymiu';
}
function marksAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

const jonasFunc = jonasMarks.length === 0 ? emptyMarksArray : marksAverage;
const jonasAverage = jonasFunc(jonasMarks);
console.log(jonasAverage);

const maryteFunc = maryteMarks.length === 0 ? emptyMarksArray : marksAverage;
const maryteAverage = maryteFunc(maryteMarks);
console.log(maryteAverage);


