const words = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];

//FOR
for (let i = 0; i < 5; i++) {
    const word = words[i]
    console.log(i, word);
}

//FOR - OF
for (const word of words) {
    console.log(word);
}

const students = [
    { name: 'Jonas', age: 99 },
    { name: 'Maryte', age: 88 },
    { name: 'Petras', age: 77 },
    { name: 'Ona', age: 66 },
];

let i = 1;
for (const student of students) {
    console.log(i++, student);
}

// WHILE

const words2 = ['Labas', 'rytas', 'Lietuva', 'sakau', 'tau'];
let i2 = 0;
while (i2 < words2.length) {
    console.log('while:', i2, words[i2]);
    i2++;
}

let i3 = 0;
while (true) {
    console.log(i3++);
    if (i3 === 10) {
        break;
    }
}

console.clear();
const hackerMarks = [10, 8, 2, 6, 4, 'desimt', 100, -7, 3.14];
let sum = 0;
let count = 0;
// for (const mark of hackerMarks) {
//     if (typeof mark !== 'number' || mark > 10 || mark < 1 || mark % 1 !== 0) {
//         continue;
//     }
//     sum += mark;
//     count++;
// }

// console.log(sum / count);

for (const mark of hackerMarks) {
    if (typeof mark === 'number' && mark <= 10 && mark >= 1 && mark % 1 === 0) {
        sum += mark;
        count++;
    }

}

console.log(sum / count);