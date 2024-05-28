// [1, 2, 3] -> [2, 4, 6]

function double(list) {
    const result = [];

    for (const item of list) {
        result.push(item * 2)
    }
    return result;
}

const a1 = [1, 2, 3];


console.log(a1, double(a1));

function triple(list) {
    const result = [];

    for (const item of list) {
        result.push(item * 3)
    }
    return result;
}

const a2 = [4, 6, 10, 15];
console.log(a2, triple(a2));

function map(list, transformFunc) {
    const result = [];

    for (const item of list) {
        result.push(transformFunc(item))
    }
    return result;
}

console.log(map(a1, n => n * 2));
console.log(map(a2, n => n * 3));

console.log(map(a2, n => n + 1));
console.log(map(a2, n => (2 * n + 1) % 10));

console.log('----------------------');
console.log(a1);
console.log(a1.map(n => n * 2));

console.log(a2);
console.log(a2.map(n => n * 3));

console.log(['Labas', 'rytas', 'Lietuva'].map(s => s[0]));
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.charAt(s.length - 1)));

const firstSymbol = s => s[0];
const lastSymbol = s => s[s.length - 1];

console.log(['Labas', 'rytas', 'Lietuva'].map(firstSymbol));
console.log(['Labas', 'rytas', 'Lietuva'].map(lastSymbol));

const marks = [10, 2, 8, 4, 6];

const updatedMarks = marks.map(n => n + 1 > 10 ? 10 : n + 1);
console.log(updatedMarks);

function increaseMarks(mark) {
    if (mark < 5) {
        return mark + 3;
    } else if (mark < 7) {
        return mark + 2;
    }
    return mark;
}

const upddatedMarks2 = marks.map(increaseMarks);
console.log(upddatedMarks2);

console.clear();

const randomNumbers = [10, -3, 3.14, 5, 777, -13, -2.727];

const postiveNumbers = randomNumbers.filter(n => n >= 0);
console.log(postiveNumbers);

const negativeNumbers = randomNumbers.filter(n => n < 0);
console.log(negativeNumbers);

const randomData2 = [10, -3, 'labas', 3.14, true, 5, [], 777, -13, {}, undefined, -2.727];

//teigiami sveikieji skiaiciai
//ne neigiami sveikieji skaiciai
const tss = randomData2
    .filter(n => true)
    .filter(n => Number.isInteger(n))
    .filter(n => n >= 0);
console.log(tss);


//SORT

const dictionary = ['lbas', 'rytas', 'asla', 'medis', 'zuvis'];
console.log(dictionary);

dictionary.sort()
console.log(dictionary);

const jonasMarks = [10, 2, 8, 11, 4, 1, 100, 100000, 102, 143, 6];
const jonasMarks1 = new Float64Array(jonasMarks);
console.log(jonasMarks1)
console.log(jonasMarks);
jonasMarks1.sort();
jonasMarks.sort();
console.log(jonasMarks);
console.log(jonasMarks1);

// neigiamas skaicius -> a eina i prieki
//                  0 -> a ir b lieka savo vietose
// teigiamas -> a eina i gala

// (5, 7) => neigiamas
// (7, 5) => teigiamas
// (7, 7) => 0
// (a, b) => a - b

jonasMarks.sort((a, b) => a - b);
console.log(jonasMarks);

jonasMarks.sort((a, b) => b - a);
console.log(jonasMarks);

console.clear();

const students = [
    { name: 'Maryte', marks: 10 },
    { name: 'Jonas', marks: 7 },
    { name: 'Petras', marks: 4 },
    { name: 'Ona', marks: 2 },
];

students.sort((a, b) => a.marks - b.marks);
console.log(students);
console.log('Maziausias vidurkis: ', students[0].marks);
console.log('Maziausias vidurkis: ', students[0].name);

function varduPalyginimas(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name === b.name) {
        return 0;
    } else {
        return 1;
    }
}

students.sort(varduPalyginimas);
console.log(students);