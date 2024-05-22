/*
OBJECT - objektas
*/

const empty = {};
console.log(empty);

// const studentas1Name = 'Jonas';
// const studentas1Age = 99;
// const studentas1IsMarried = true;

// const studentas2Name = 'Maryte';
// const studentas2Age = 88;
// const studentas2IsMarried = false;

// const studentas3Name = 'Petras';
// const studentas3Age = 77;
// const studentas3IsMarried = false;

// const studentas4Name = 'Ona';
// const studentas4Age = 66;
// const studentas4IsMarried = true;

// const stud1 = ['Jonas', 99, true];
// const stud2 = ['Maryte', 88, false];
// const stud3 = ['Petras', 77, false];
// const stud4 = ['Ona', 66, true];
// informacija gali buti sumaisyta

const stud1 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};
console.log(stud1);
console.log(stud1.name);
console.log(stud1.age);
console.log(stud1.isMarried);

const stud2 = {
    isMarried: false,
    name: 'Maryte',
    age: 88,
};
console.log(stud2);
console.clear();

const students = [
    { name: 'Jonas', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Petras', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
];

// console.log(students[3]);
// console.log(students.at(-1).name);

//Sveiki, as Vardas, man xx metu ir esu/nesu vedes.
function introduction(stud) {
    const status = stud.isMarried ? 'esu' : 'nesu';
    return `Sveiki, as ${stud.name}, man ${stud.age} metu ir ${status} vedes.`;

}
for (let i = 0; i < students.length; i++) {
    console.log(introduction(students[i]));
}
