/*


*/

const word = "labas rytas, Lietuva";
const number = "0";

console.log(word);
console.log('labas rytas, Lietuva');
console.log(word[9]);
console.log('labas rytas, Lietuva'[9]);

console.log('-----------');
console.log('charAt()');

console.log(word.charAt(9));
console.log('labas rytas, Lietuva'.charAt(9));

console.log('-----------');
console.log('charCodeAt()');

console.log(word.charCodeAt(0));
console.log(word.charCodeAt(1));
console.log(word.charCodeAt(2));
console.log(word.charCodeAt(3));
console.log(number.charCodeAt(0));


// 010101010(dvejetaine) -> 127(desimtaine) -> A
// 010101001 -> 128 -> B

console.log('-----------');
console.log('concat()');

console.log('labas'.concat('rytas'));
console.log('labas'.concat('rytas', 'Lietuva'));
console.log('labas'.concat('rytas').concat('Lietuva'));

console.log('-----------');
console.log('endsWith()');

console.log('labas'.endsWith('x'));
console.log('labas'.endsWith('s'));
console.log('labas'.endsWith('ss'));
console.log('labas'.endsWith('as'));

console.log('-----------');
console.log('starstWith()');

console.log('labas'.startsWith('x'));
console.log('labas'.startsWith('gg'));
console.log('labas'.startsWith('ggaafsfs'));
console.log('labas'.startsWith('L'));
console.log('labas'.startsWith('lab'));


console.log('--------------');
console.log('includes()');
console.log('Pomidoras'.includes('x'));
console.log('Pomidoras'.includes('dor'));
console.log('Pomidoras'.includes('ido'));
console.log('Pomidoras'.includes('Pomidoras'));


console.log('--------------');
console.log('indexOf()');
console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('gg'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('Po'));
console.log('Pomidoras'.indexOf('mid'));
console.log('Pomidoras'.indexOf('o', 2));

//grazina teksto pradzios index'a


console.log('--------------');
console.log('repeat()');

console.log('A'.repeat(10));
console.log('U'.repeat(20));
console.log('Labas'.repeat(10));
console.log('Labas'.repeat(3.6));

console.log('--------------');
console.log('replace()');
console.log('Pomidoras'.replace('P', 'B'));
console.log('Pomidoras'.replace('o', 'x'));
console.log('Pomidoras'.replace('o', '-x-'));
console.log('Pomidoras'.replace('o', '_').replace('o', '_'));

console.log('--------------');
console.log('replaceAll()');

console.log('Pomidoras'.replaceAll('o', '_'));
console.log('Pomidoras'.replaceAll('o', '_').replaceAll('m', 'k'));

console.log('--------------');
console.log('slice()');


console.log('Pyragelis'.slice());
console.log('Pyragelis'.slice(2, 6));

const p = 'Pyragelis';
//
console.log(p.slice(p.length - 3));

//console.log('aaa'.split);
//console.log('aaa'.toLowerCase);
//console.log('aaa'.toUpperCase);
//console.log('aaa'.trim);
//console.log('aaa'.trimEnd);
//console.log('aaa'.triStart);

console.log('-----------');
console.log('split()');

console.log('Pomidoras'.split('o'));
console.log('Pomidoras'.split('o', 2));
console.log('Pomidoras'.split('o', 1));

console.log('-----------');
console.log('toLowerCase()');

console.log('Pomidoras'.toLowerCase());
console.log('POMIDORAS'.toLowerCase());
console.log('POMiDoRAS'.toLowerCase());
console.log('pomidoras'.toLowerCase());


console.log('-----------');
console.log('toUpperrCase()');

console.log('pomidoras'.toUpperCase());
console.log('pomidOras'.toUpperCase());
console.log('Pomidoras'.toUpperCase());
console.log('POMIDORAS'.toUpperCase());


console.log('-----------');
console.log('trim()');

console.log('Pomidoras'.trim());
console.log('       Po mid oras. '.trim());
console.log('       Po mid oras        .'.trim());
console.log('.      Po mid oras        '.trim());
console.log(('.      Po mid oras        '.trim()).length);
console.log(('     Po mid oras        '.trim()).length);


console.log('-----------');
console.log('trimEnd()');


console.log('Pomidoras'.trimEnd());
console.log(('Pomidoras'.trimEnd()).length);
console.log('Pomidoras         '.trimEnd());
console.log(('Pomidoras         '.trimEnd()).length);
console.log('      Pomidoras         '.trimEnd());
console.log(('      Pomidoras         '.trimEnd()).length);



console.log('-----------');
console.log('trimStart()');


console.log('Pomidoras'.trimStart());
console.log(('Pomidoras'.trimStart()).length);
console.log('Pomidoras         '.trimStart());
console.log(('Pomidoras         '.trimStart()).length);
console.log('      Pomidoras         '.trimStart());
console.log(('      Pomidoras         '.trimStart()).length);
