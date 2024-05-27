/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

const marks = [10, 2, 8, 4, 6];
const abc = ['a', 'b', 'c', 'd', 'e'];

console.log('\nconcat---------');
console.log([...marks].concat([1, 2, 3]));
console.log([...marks].concat(4, 5, 6));

console.log('\ncopywithin---------');
console.log([...marks].copyWithin(2, 0, 1));
console.log([...marks].copyWithin(2, 0, 2));
console.log([...marks].copyWithin(2, 0, 3));
console.log([...marks].copyWithin(3, 0, 3));

console.log('\nfill---------');
console.log([...marks].fill(999));
console.log([...marks].fill('labas'));
console.log([...marks].fill('labas', 2));
console.log([...marks].fill('labas', 1, 3));

const a = new Array(15).fill('zuikis'); // sukurs areju su 15 irasu.

console.log('\nflat---------');
console.log([1, 2, 3].flat());
console.log([1, [2, 4], 3].flat());
console.log([1, [2, [5, 6], 4], 3].flat());
console.log([1, [2, [5, 6], 4], 3].flat(3));

console.log('\ninclude---------');
console.log([...marks].includes(3));
console.log([...marks].includes(2));
console.log([[1], [2], [3], [4]].includes([2]));

const two = [2]
console.log([[1], two, [3], [4]].includes(two));



console.log('\nindexOf---------');
console.log([...marks].indexOf('labas'));
console.log([...marks].indexOf(10));
console.log([...marks].indexOf(6));


console.log([...marks].indexOf(6, 2));
console.log([...marks].indexOf(6, 5));

console.log('\njoin---------');
console.log(abc);
console.log([...abc].join());
console.log([...marks].join());
console.log([...abc].join(', '));
console.log([...marks].join(''));

console.log('\nkeys---------');
console.log([...abc].keys());

console.log('\nlastIndexOf---------');
console.log([...marks].lastIndexOf(10));
console.log([...marks].lastIndexOf(7));
console.log([...marks].lastIndexOf(4));
console.log([...marks, 7, 9, 4, 3].lastIndexOf(4));
console.log([...marks, 7, 9, 4, 3].lastIndexOf(4, 8, 6));

console.log('\npop---------');
const marks2 = [...marks];
console.log(marks2.pop());
console.log(marks2);

console.log('\npush----------');
const marks3 = [...marks];
console.log(marks3);
console.log(marks3.push(7));
console.log(marks3);
console.log(marks3.push(8));
console.log(marks3);

console.log('\nunshift----------');
const marks4 = [...marks];
console.log(marks4);
console.log(marks4.unshift(0));
console.log(marks4);
console.log(marks4.unshift(7));
console.log(marks4);

console.log('\shift----------');
const marks5 = [...marks];
console.log(marks5);
console.log(marks5.shift());
console.log(marks5);

console.log('\nreverse----------');
console.log([...marks]);
console.log([...marks].reverse());

const demo = ['Labas', 'rytas', ',', 'Lietuvas', '!'];
console.log(demo);
demo.reverse();
console.log(demo);
//pakeicia originalu masyva.
const demo1 = demo.toReversed(); //pakeicia i nauja masyva.
console.log(demo1);
console.log(demo);

// function turboIndexOF (list, search) {
// [10, 2, 8, 4, 6] -> [2]; true
// [10, 2, 8, 4, 6] -> [2, 8]; true
// [10, 2, 8, 4, 6] -> [2, 8, 4]; true
// [10, 2, 8, 4, 6] -> [2, 8, 6]; false
//}


function turboIndexOF(list, search) {
    const list1 = [...list].toString();
    const search1 = [...search].toString();
    return `[${list}] includes ---> [${search}]: ${list1.includes(search1)}`;

}

console.log(turboIndexOF([10, 5, 11, 6, 9, 12], [10, 5]));
