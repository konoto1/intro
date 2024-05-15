const matrix = [10, 2, 8, 4, 6];

console.log(matrix);


for (let i = 0; i < matrix.length; i++) {
    console.log(i, '-', matrix[i]);
}

console.clear();

//n=matis masyvas
//nth array
const students = [
    [10, 9, 8, 7], // jono pazymiai
    [9, 9, 9, 9, 9], // marytes pazymiai
    [7, 8, 9, 7, 8, 9, 7, 8, 9], // petro pazymiai
    [8, 8, 8, 8, 8, 8, 8], // onos pazymiai
];

console.log(students[0]);
const jonoPazymiai = students[0];
console.log(jonoPazymiai[0]);
console.log(jonoPazymiai[1]);
console.log(jonoPazymiai[2]);

for (let i = 0; i < jonoPazymiai.length; i++) {
    console.log('jonas', jonoPazymiai[i]);
}

console.log(students[0][0]);


console.clear();

const gorila = [
    [1, 2, 3],
    [4, [5, 6], 7],
    [
        [8, 9, 10, 11, 12, 13, [14, 15]],
    ],
];

console.log(gorila[2][0]);
console.log('--------');
console.log(gorila[2][0][6][0]);



