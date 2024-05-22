let myName = "Tomas";
let myAge = 34;

console.log(myName);
console.log(myAge);

console.log(typeof myName);
console.log(typeof myAge);

myName = "Jonas";

console.log(myName);
console.log(typeof myName);
console.log("Tomas");


function answer(distanceToPump, mpg, fuelLeft) {
    if (typeof distanceToPump !== "number") {
        return "Input must be a number";
    }
    if (typeof mpg !== "number") {
        return "Input must be a number";
    }
    if (typeof fuelLeft !== "number") {
        return "Input must be a number";
    }
    if (distanceToPump - (mpg * fuelLeft) <= 0) {
        return true;
    }
    return false;
}


console.log(answer(50, 10, 3));



console.clear();


console.log("------------Zaidimukas--------------");


function check(a, x) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === x) {
            return true;
        }
    }
    return false;
}

console.log(check([66, 101], 66));
console.log(check([101, 45, 75, 105, 99, 107], 107));
console.log(check(['t', 'e', 's', 't'], 'e'));
console.log(check(['what', 'a', 'great', 'kata'], 'kat'));
console.log(check(["jonas", 65, 100], 65));


function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}


console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));

console.clear();


function arrayMadness(a, b) {
    sumA = 0;
    sumB = 0;
    for (let i = 0; i < a.length; i++) {
        sumA += (a[i]) ** 2;
    }
    for (let i = 0; i < b.length; i++) {
        sumB += (b[i]) ** 3;
    }
    if (sumA > sumB) {
        return true;
    }
    return false;
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3]));
console.log(arrayMadness([5, 6, 7], [4, 5, 6]));
console.log(arrayMadness([4, 5, 6], [3, 4, 5]));
console.log(arrayMadness([3, 4, 5], [2, 3, 4]));
console.log(arrayMadness([2, 3, 4], [1, 2, 3]));
console.log(arrayMadness([1, 2, 3], [0, 1, 2]));
console.log(arrayMadness([5, 3, 2, 4, 1], [15]));
console.log(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3]));
console.log(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1]));
console.log(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]));
console.log(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13]));


console.clear();


function strCount(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

console.log(strCount('Hello', 'o'));
console.log(strCount('Hello', 'l'));
console.log(strCount('', 'z'));

console.clear();


function differenceInAges(ages) {
    let youngest = ages[0];
    let oldest = ages[0];
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] < youngest) {
            youngest = ages[i]
        }
    }
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] > oldest) {
            oldest = ages[i];
        }
    }
    return [youngest, oldest, oldest - youngest];
}

console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);




function past(h, m, s) {
    let ms = (h * 3600 + m * 60 + s) * 100;
    if (0 >= h >= 23 && 0 >= m >= 59 && 0 >= s >= 59) {
        return "wrong input";
    }
    return ms;
}

console.log(past(0, 1, 1));

function summation(num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}

console.log(summation(1));
console.log(summation(2));
console.log(summation(8));
console.log(summation(5));

function tripleTrouble(one, two, three) {
    let sumText = "";
    if (one.length === two.length === three.length) {
        return "input length not equal";
    }
    for (let i = 0; i < one.length; i++) {
        sumText += (one[i] + two[i] + three[i]);
    }
    return sumText;
}


console.log(tripleTrouble("aaa", "bbb", "ccc"));
console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc"));
console.log(tripleTrouble("burn", "reds", "roll"));
console.log(tripleTrouble("Sea", "urn", "pms"));
console.log(tripleTrouble("LLh", "euo", "xtr"));

console.clear();


function liters(time) {
    return parseInt(time * 0.5);
}


console.log(liters(2));
console.log(liters(1.4));
console.log(liters(12.3));
console.log(liters(0.82));
console.log(liters(11.8));
console.log(liters(1787));
console.log(liters(0));


console.clear();

function areaOrPerimeter(l, w) {
    let square = l * w;
    let perimetter = (l + w) * 2;
    if (l === w) {
        return square;
    }
    return perimetter;
}


console.log(areaOrPerimeter(3, 3));
console.log(areaOrPerimeter(6, 10));

console.clear();


function guessBlue(blueStart, redStart, bluePulled, redPulled) {
    let blueLeft = blueStart - bluePulled;
    let redLeft = redStart - redPulled;
    let chances = blueLeft / (blueLeft + redLeft);
    if (bluePulled > blueStart || redPulled > redStart) {
        return "Wrong input";
    }
    return parseFloat(chances);
}


console.log(guessBlue(5, 5, 2, 3));
console.log(guessBlue(5, 7, 4, 3));
console.log(guessBlue(12, 18, 4, 6));

console.clear();

console.log("" + parseFloat);
console.log("" + toString(parseFloat));

console.clear();


function correctPolishLetters(string) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        if (letter === 'ą') {
            result += 'a';
        } else if (letter === 'ć') {
            result += 'c';
        } else if (letter === 'ę') {
            result += 'e';
        } else if (letter === 'ł') {
            result += 'l';
        } else if (letter === 'ń') {
            result += 'n';
        } else if (letter === 'ó') {
            result += 'o';
        } else if (letter === 'ś') {
            result += 's';
        } else if (letter === 'ź') {
            result += 'z';
        } else if (letter === 'ż') {
            result += 'z';
        }
        else {
            result += letter;
        }
    }
    return result;
}



console.log(correctPolishLetters("Wałęsa"));
console.log(correctPolishLetters("Jędrzęj Błądziński"));
console.log(correctPolishLetters("Lech Wałęsa"));
console.log(correctPolishLetters("Maria Skłodowska-Curie"));

console.clear();
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z


function correctPolishLetters1(string) {
    let result = '';
    const polishAbc = "ąćęłńóśźż";
    const normalAbc = "acelnoszz";
    for (let i = 0; i < string.length; i++) {
        const letter = string[i];
        //kur sedi ę polishAbc index 2
        //kur sedi normalAbc e index 2
        let index = -1;
        for (let j = 0; j < polishAbc.length; j++) {
            const polishletter = polishAbc[j];
            if (polishletter === letter) {
                result += normalAbc[j];
                index = j;
            }
        }
        if (index === -1) {
            result += letter;
        }
    }
    return result;
}

console.log(correctPolishLetters1("Wałęsa"));
console.log(correctPolishLetters1("Jędrzęj Błądziński"));
console.log(correctPolishLetters1("Lech Wałęsa"));
console.log(correctPolishLetters1("Maria Skłodowska-Curie"));


console.clear();

function getDrinkByProfession(param) {
    if (param.toLowerCase() === 'jabroni') {
        return 'Patron Tequila';
    } else if (param.toLowerCase() === 'school counselor') {
        return 'Anything with Alcohol';
    } else if (param.toLowerCase() === 'programmer') {
        return 'Hipster Craft Beer';
    } else if (param.toLowerCase() === 'bike gang member') {
        return 'Moonshine';
    } else if (param.toLowerCase() === 'politician') {
        return 'Your tax dollars';
    } else if (param.toLowerCase() === 'rapper') {
        return 'Cristal';
    } else {
        return 'Beer';
    }
}


console.log(getDrinkByProfession("jabrOni"));
console.log(getDrinkByProfession("scHOOl counselor"));
console.log(getDrinkByProfession("prOgramMer"));
console.log(getDrinkByProfession("bike ganG member"));
console.log(getDrinkByProfession("poLiTiCian"));
console.log(getDrinkByProfession("rapper"));
console.log(getDrinkByProfession("pundit"));
console.log(getDrinkByProfession("Pug"));

console.clear();

function century(year) {
    const cent = year / 100;
    if (year < 1) {
        return "wrong input";
        console.log("1---");
    }
    if (cent <= 1) {
        return 1;
        console.log('2----');
    }
    if (cent % 1 === 0) {
        return parseInt(cent);
    } else {
        return parseInt(cent) + 1;
    }
}

console.log(century(1705)); //18, 'Testing for year 1705');
console.log(century(1900)); //19, 'Testing for year 1900');
console.log(century(1601)); //17, 'Testing for year 1601');
console.log(century(2000));// 20, 'Testing for year 2000');
console.log(century(89));// 1, 'Testing for year 89');
console.log(century(101));// 1, 'Testing for year 89');

console.clear();


function countSheeps(sheep) {
    let count = 0;
    for (let i = 0; i < sheep.length; i++) {
        if ('' + sheep[i] === 'true') {
            count++;
        }
    }
    return count;
}



console.log(countSheeps([]));
console.log(countSheeps([undefined]));
console.log(countSheeps([null]));
console.log(countSheeps([true]));
console.log(countSheeps([undefined, null, false, true]));
console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]));
console.log(countSheeps([undefined, null, false, true, true, false, null, undefined]));
console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));

console.clear();
console.log('------Will there  be enough space------');


function enough(cap, on, wait) {
    const space = cap - on - wait;
    if (space >= 0) {
        return 0;
    }
    return -1 * space;
}


console.log(enough(10, 5, 5));        //0);
console.log(enough(100, 60, 50));     //10);
console.log(enough(20, 5, 5));        //0);


console.clear();
console.log('-----Calculate number of magazines------');

function magNumber(info) {
    const bullets = 3 * info[1];
    if (info[0] === 'PT92' && bullets % 17 !== 0) {
        return parseInt(bullets / 17) + 1;
    } else if (info[0] === 'PT92') {
        return bullets / 17;
    }
    if (info[0] === 'M4A1' && bullets % 30 !== 0 || info[0] === 'M16A2' && bullets % 30 !== 0) {
        return parseInt(bullets / 30) + 1;
    } else if (info[0] === 'M4A1' || info[0] === 'M16A2') {
        return bullets / 30;
    }
    if (info[0] === 'PSG1' && bullets % 5 !== 0) {
        return parseInt(bullets / 5) + 1;
    } else if (info[0] === 'PSG1') {
        return bullets / 5;
    }
    return 'Wrong input';
}


console.log(magNumber(["PT92", 17]));        // 3]
console.log(magNumber(["M4A1", 8]));         // 1]
console.log(magNumber(["M16A2", 19]));       // 2]
console.log(magNumber(["PSG1", 31]));        // 19]
console.log(magNumber(["PT92", 19]));        // 4]
console.log(magNumber(["M16A2", 800]));      // 80]

console.clear();

console.log('----Reversed words----');

function reverseWords(str) {
    let newStr = "";
    const strList = str.split(' ');
    for (let i = strList.length - 1; i >= 0; i--) {
        newStr += (strList[i] + ' ');
    }
    return newStr.trimEnd();
}


console.log(reverseWords("hello world!"));                        //  , "world! hello")
console.log(reverseWords("yoda doesn't speak like this"));        //  , "this like speak doesn't yoda")
console.log(reverseWords("foobar"));                              //  , "foobar")
console.log(reverseWords("kata editor"));                         //  , "editor kata")
console.log(reverseWords("row row row your boat"));               //  , "boat your row row row")
console.log(reverseWords(""));                                    //  , "")

console.clear();
console.log('------Add Length-----');

function addLength(str) {
    const array = str.split(' ');
    let newText = '';

    for (let i = 0; i < array.length; i++) {
        newText += (array[i] + ' ' + array[i].length + '  ');
    }
    let newArray = newText.trimEnd().split('  ');

    return newArray;
}


console.log(addLength('you will win'));  // ["you 3", "will 4", "win 3"]));


console.clear();

console.log('-----Difference of Volumes of Cuboids-----')

function findDifference(a, b) {
    const diff = a[0] * a[1] * a[2] - b[0] * b[1] * b[2]
    if (diff < 0) {
        return -1 * diff;
    }
    return diff;
}


console.log(findDifference([3, 2, 5], [1, 4, 4]));          // 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]));          // 106);
console.log(findDifference([11, 2, 5], [1, 10, 8]));        // 30);
console.log(findDifference([4, 4, 7], [3, 9, 3]));          // 31);
console.log(findDifference([15, 20, 25], [10, 30, 25]));    // 0);

console.clear();

console.log('-------Calculate BMI--------');


function bmi(weight, height) {
    const bmi = weight / (height ** 2);
    console.log(bmi);
    if (bmi <= 18.5) {
        return 'Underweight';
    }
    if (18.5 < bmi && bmi <= 25.0) {
        return 'Normal';
    }
    if (25.0 < bmi && bmi <= 30) {
        return 'Overweight';
    }
    if (30 < bmi) {
        return 'Obese';
    }
    return "wrong input";
}

console.log(bmi(80, 1.80));         //"Normal"

console.clear();

console.log('----------Switch it Up!-----------');


function switchItUp(number) {
    const word = ('' + number)
        .replaceAll('0', 'Zero')
        .replaceAll('1', 'One')
        .replaceAll('2', 'Two')
        .replaceAll('3', 'Three')
        .replaceAll('4', 'Four')
        .replaceAll('5', 'Five')
        .replaceAll('6', 'Six')
        .replaceAll('7', 'Seven')
        .replaceAll('8', 'Eight')
        .replaceAll('9', 'Nine')
    return word;
}


console.log(switchItUp(1));         // "One"
console.log(switchItUp(3));         // "Three"
console.log(switchItUp(5));         // "Five"

console.clear();

console.log('---------Simple Multiplications------');


function simpleMultiplication(number) {
    const isEven = number % 2;
    if (isEven === 0) {
        return number * 8;
    }
    return number * 9;
}

console.log(simpleMultiplication(2));           // 16, 'Should return given argument times eight...')
console.log(simpleMultiplication(1));           // 9, 'Should return given argument times nine...')
console.log(simpleMultiplication(8));           // 64, 'Should return given argument times eight...')
console.log(simpleMultiplication(4));           // 32, 'Should return given argument times eight...')
console.log(simpleMultiplication(5));           // 45, 'Should return given argument times nine...')

console.clear();
console.log('------Super Duper Easy-----');

function problem(x) {
    const result = x * 50 + 6;
    if (typeof (x) !== 'number') {
        return 'Error';
    }
    return result;
}

console.log(problem("hello"));        // "Error");
console.log(problem(1));              //  56);
console.log(problem(5));              //  256);
console.log(problem(0));              //  6);
console.log(problem(1.2));            //  66);
console.log(problem(3));              //  156);
console.log(problem("RyanIsCool"));   //  "Error");
console.log(problem(-3));             //  -144);
console.log(problem(""));             //  "Error");
console.log(problem(0.03));           //  7.5);

console.clear();

console.log('--------Exclusive "or" (xor) Logical Operator---------');

function xor(a, b) {
    if ('' + a !== 'true' && '' + b !== 'true') {
        return false;
    } else if ('' + a === 'true' && '' + b === 'true') {
        return false;
    }
    return true;
}


console.log(xor(false, false));         // false, "false xor false");
console.log(xor(true, false));          // true, "true xor false");
console.log(xor(false, true));          // true, "false xor true");
console.log(xor(true, true));           // false, "true xor true");
console.log(xor(true, true));           // true, "true xor true: 'xor' is NOT identical to 'or'");

console.clear();

console.log('---------Capitalization and Mutability----------');

function capitalizeWord(word) {
    const upperLetter = word[0].toUpperCase();
    const newWord = upperLetter + word.slice(1);
    return newWord;
}


console.log(capitalizeWord('word'));            // 'Word');
console.log(capitalizeWord('i'));               // 'I');
console.log(capitalizeWord('glasswear'));       // 'Glasswear');

console.clear();
console.log('----------Contamination #1 -String------')

function contamination(text, char) {
    const newText = '' + char.repeat(text.length)
    return newText;
}


console.log(contamination("abc", "z"));          // "zzz")
console.log(contamination("", "z"));             // "")
console.log(contamination("abc", ""));           // "")
console.log(contamination("_3ebzgh4", "&"));     // "&&&&&&&&")
console.log(contamination("//case", " "));       // "      ")

console.clear();
console.log('----------Find the position!------')


function position(letter) {
    const abc = '.abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + abc.indexOf(letter);
}

console.log(position("a"));     //"Position of alphabet: 1");
console.log(position("z"));     //"Position of alphabet: 26");
console.log(position("e"));     //"Position of alphabet: 5");


console.clear();
console.log('----------Find the position!------')



const array1 = ['Tomas', ['Algis', 'Ona'], 'Jonas', 'Petras'];
const iterator1 = array1[Symbol.iterator]();

for (const value of iterator1) {
    console.log(value);
}


const arrayA = ['Tomas', 'b', 'd'];
const arrayB = ['c', 'e', 'f'];
const arrayC = arrayA.concat(arrayB);

console.log(arrayC);


const arrayZ = ['a', 'b', 'c', 'd', 'e'];

console.log(arrayZ.copyWithin(0, 1, 7));


console.clear();
console.log('-----------Multiple of index----------------');

function multipleOfIndex(array) {
    let newArray = [];
    let values = 0;
    if (array[0] === 0) {
        newArray = [0];
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] % i === 0) {
            values = array[i];
            newArray.push(values);
        }
    }
    return newArray;
}



console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));                                                                     // [-6, 32, 25]],
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]));                                                                     // [-1, 10]],
console.log(multipleOfIndex([11, -11]));                                                                                  // [-11]))
console.log(multipleOfIndex([-56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92, 68]));            // [-85, 72, 0, 68]],
console.log(multipleOfIndex([28, 38, -44, -99, -13, -54, 77, -51]));                                                      // [38, -44, -99]],
console.log(multipleOfIndex([-1, -49, -1, 67, 8, -60, 39, 35]));                                                          // [-49, 8, -60, 35]],
console.log(multipleOfIndex([0, 2, 3, 6, 9]));                                                                            // [0, 2, 6]]


const words = [68, -1, 1, -7, 10, 10];

const result = words.filter((num) => num % words.indexOf(num) === 0);

console.log(0 / 0);


console.clear();
console.log('--------A Needle in the Haystack-------');

function findNeedle(haystack) {
    return 'found the needle at position ' + haystack.indexOf('needle');
}


console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
console.log(findNeedle(['283497238987234', 'a dog', 'a cat', 'some random needle junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']));
console.log(findNeedle([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54]));

console.clear();
console.log('-----Sentence Smash----');


function smash(words) {
    return words.toString().replaceAll(',', ' ');
}


console.log(smash(["hello", "world"]));                                        // "hello world");
console.log(smash(["hello", "amazing", "world"]));                             // "hello amazing world");
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));         // "this is a really long sentence");

console.clear();
console.log('---------Get the mean of an array-------');

function getAverage(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return parseInt(sum / marks.length);
}


console.log(getAverage([2, 2, 2, 2]));                   // 2);
console.log(getAverage([1, 2, 3, 4, 5,]));               // 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]));       // 1);
console.log(getAverage([1, 5, 87, 45, 8, 8,]));       // 25);


console.clear();
console.log('------Quadratic Coefficients Solver---');


function quadratic(x1, x2) {
    const a = 1;
    const b = -(x1) - (x2);
    const c = -(x1) * -(x2);
    const result = [a, b, c];
    //const equation = ((x - x1) * (x - x2)); //x**2 - x*x2 - x*x1 -x1*-x2
    return result;
}



console.log(quadratic(0, 1));         // [1, -1, 0]);
console.log(quadratic(1, 1));         // [1, -2, 1]);
console.log(quadratic(-4, -9));       // [1, 13, 36]);
console.log(quadratic(-5, -4));       // [1, 9, 20]);
console.log(quadratic(4, -9));        // [1, 5, -36]);
console.log(quadratic(5, -4));        // [1, -1, -20]);


function sc(floor) {
    if (floor <= 1) {
        return 'good luck';
    }
    if (floor <= 6) {
        return 'Aa~'.repeat(floor - 1) + ' Pa! Aa!';
    }
    return 'Aa~'.repeat(floor - 1) + ' Pa!';
}


console.log(sc(2));         // "Aa~ Pa! Aa!", "good luck!");
console.log(sc(6));         // "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!");
console.log(sc(7));         // "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!");
console.log(sc(10));        // "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!");
console.log(sc(1));         // "", "good luck!");
console.log(sc(-1));        // "", "good luck!"); 

console.clear();
console.log('----Training JS #7: if..else and ternary operator-----')

function saleHotdogs(n) {
    if (n < 5) {
        return n * 100;
    }
    if (5 <= n && n < 10) {
        return n * 95;
    }
    return n * 90;
}


console.log(saleHotdogs(1));            // 100);
console.log(saleHotdogs(4));            // 400);
console.log(saleHotdogs(5));            // 475);
console.log(saleHotdogs(9));            // 855);
console.log(saleHotdogs(10));           // 900);
console.log(saleHotdogs(100));          // 9000);


console.clear();
console.log('------Training JS #10: loop statement --for---');


function pickIt(arr) {
    let odd = [], even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        } else { odd.push(arr[i]) }
    }
    return [odd, even];
}

console.log(pickIt([1, 2]));                        //    [[1], [2]]);
console.log(pickIt([1, 2, 3]));                     //    [[1, 3], [2]]);
console.log(pickIt([3, 2, 1]));                     //    [[3, 1], [2]]);
console.log(pickIt([10, 20, 30]));                  //    [[  ], [10, 20, 30]]);
console.log(pickIt([11, 21, 31]));                  //    [[11, 21, 31], []]);
console.log(pickIt([8, 1, 5, 4, 6, 1, 1]));         //    [[1, 5, 1, 1], [8, 4, 6]]);


console.clear();
console.log('-----Training JS #4: Basic data types--Array----');


function getLength(arr) {
    return arr.length;
}
function getFirst(arr) {
    //return the first element of arr
    return arr[0];
}
function getLast(arr) {
    //return the last element of arr
    return arr[arr.length - 1];
}
function pushElement(arr) {
    let el = 1;
    arr.push(el);
    return arr;
}
function popElement(arr) {
    arr.pop();
    return arr;
}

console.log(getLength([1, 2, 3]));                    //  3);
console.log(getFirst([1, 2, 3]));                     //  1);
console.log(getLast([1, 2, 3]));                      //  3);
console.log(pushElement([1, 2, 3]).length);           //  4);
console.log(popElement([1, 2, 3]).length);            //  2);


// const new1 = [1, 2, 3];
// const new2 = new1.pop();
// console.log(new1);

console.clear();
console.log('-----Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()----');



function howManySmaller(arr, n) {
    let sum = 0;
    // let arr1 = [];
    // for (let i = 0; i < arr.length; i++) {
    //     arr1.push(parseFloat((arr[i]).toFixed(2)));
    // }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toFixed(2) < n) {
            sum++;
        }
    }
    return sum;
}


console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));               // 2);
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19));            // 1);
console.log(howManySmaller([3.1288, 3.1212, 3.1205], 3.1212));          // 2);


console.clear();
console.log('------------Training JS #16: Methods of String object--slice(), substring() and substr()---------');


function cutIt(arr) {
    let shortest = arr[0].length;
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < shortest) {
            shortest = arr[i].length;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        arr1.push(arr[i].slice(0, shortest));
    }
    return arr1;
}


console.log(cutIt(["3256", "cde", "fgh"]));                           // ["ab", "cd", "fg"]);
console.log(cutIt(["abcasasas", "defgh", "ijklmn"]));                     // ["abc", "def", "ijk"]);
console.log(cutIt(["codewars", "javascript", "java"]));             // ["code", "java", "java"]);

console.clear();
console.log('----------Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()--------');


function firstToLast(str, c) {
    const newStr = str.toLowerCase();
    if (newStr.indexOf(c) === -1) {
        return -1;
    }
    if (newStr.indexOf(c) === newStr.lastIndexOf(c)) {
        return 0;
    }
    return newStr.lastIndexOf(c) - newStr.indexOf(c);

}


console.log(firstToLast("ababc", "a"));             // 2);
console.log(firstToLast("ababc", "c"));             // 0);
console.log(firstToLast("ababc", "d"));             // -1);


console.clear();
console.log('-----------Training JS #21: Methods of String object--trim() and the string template------------');


function fiveLine(s) {
    const sS = s.trim();
    return `${sS}\n${sS.repeat(2)}\n${sS.repeat(3)}\n${sS.repeat(4)}\n${sS.repeat(5)};`

}


console.log(fiveLine("  a"));                                       // "a\naa\naaa\naaaa\naaaaa");
console.log(fiveLine("\txy \n"));                                   // "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
console.log(fiveLine("           Ok               "));              // "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");


console.clear();
console.log('-----------Training JS #31: methods of arrayObject---isArray() indexOf() and toString()------------');

function blackAndWhite(arr) {
    if (Array.isArray(arr) !== true) {
        return `It's a fake array`;
    }
    if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) {
        return `It's a black array`;
    }
    if (arr.indexOf(5) === -1 || arr.indexOf(13) === -1) {
        return `It's a white array`;
    }
}

console.log(blackAndWhite(5, 13));              //"It's a fake array");
console.log(blackAndWhite([5, 13]));             //"It's a black array");
console.log(blackAndWhite([5, 12]));             //"It's a white array");


console.clear();
console.log(`-----------If you can't sleep, just count sheep!!------------`);


function countSheep(num) {
    let txt = ``;
    for (let i = 1; i <= num; i++) {
        txt += `${i} sheep...`;
    }
    return txt;
}


console.log(countSheep(0));         // "");
console.log(countSheep(1));         // "1 sheep...");
console.log(countSheep(2));         // "1 sheep...2 sheep...");
console.log(countSheep(3));         // "1 sheep...2 sheep...3 sheep...");



console.clear();
console.log(`-----------Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()------------`);


function alienLanguage(str) {
    const newStr = str.toUpperCase().split(' ');
    const newArray = [];
    let newText = '';
    for (let i = 0; i < newStr.length; i++) {
        newArray.push((newStr[i].slice(0, newStr[i].length - 1) + (newStr[i][(newStr[i].length - 1)]).toLowerCase()));
    }
    for (let i = 0; i < newArray.length; i++) {
        newText += newArray[i] + ' ';
    }
    return newText.trim();
}



console.log(alienLanguage("My name is John"));           //"My NAMe Is JOHn");
console.log(alienLanguage("this is an example"));        // "THIs Is An EXAMPLe");
console.log(alienLanguage("Hello World"));               // "HELLo WORLd");
console.log(alienLanguage("HELLO WORLD"));               // "HELLo WORLd");


console.clear();
console.log(`-----------Draw stairs------------`);


function drawStairs(n) {
    let text = '';
    for (let i = 0; i < n; i++) {
        text += ' '.repeat(i) + 'I\n';
    }
    return text.trim();
}


console.log(drawStairs(1));                 // "I", "The first step has no padding on the left, just an 'I'"));
console.log(drawStairs(3));                 // "I\n I\n  I", "There's something wrong with these 3 steps"));
console.log(drawStairs(5));                 // "I\n I\n  I\n   I\n    I", "5-step stairs no good"));


console.clear();
console.log('--------Collatz Conjecture (3n+1)------');


// const hotpo = function (n) {
//     if (n === 0 || n === 1) {
//         return 0;
//     }
//     for (let i = 0; i < n; i += 2) {
//         console.log(n, i);
//         if (n % 2 === 0) {

//             m /= i;
//             // } else if (n % 2 !== 0) {
//             //     m = n * 3 + 1;
//             // }

//         }
//     }
//     return n;
// }

//console.log(hotpo(5));

console.clear();
console.clear(`---------Bingo ( Or Not )-------`);

function bingo(a) {
    if (a.includes(2) &&
        a.includes(7) &&
        a.includes(9) &&
        a.includes(14) &&
        a.includes(15)) {
        return 'WIN';
    }
    return 'LOSE';
}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));        //"LOSE");
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]));    //"WIN");
console.log(bingo([21, 13, 7, 2, 5, 14, 1, 15, 9, 10]));    //"WIN");
console.log(bingo([21, 13, 15, 14, 9, 1, 2, 9, 10]));    //"WIN");

console.clear();
console.log('---------Training JS #13: Number object and its properties----');

function whatNumberIsIt(n) {
    if (n === Number.MAX_VALUE) {
        return "Input number is Number.MAX_VALUE";
    }
    if (n === Number.MIN_VALUE) {
        return "Input number is Number.MIN_VALUE";
    }
    if ('' + n === 'NaN') {
        return 'Inpun number is Number.NaN';
    }
    if (n === -Infinity) {
        return "Input number is Number.NEGATIVE_INFINITY";
    }
    if (n === Infinity) {
        return "Input number is Number.POSITIVE_INFINITY";
    }
    return `Input number is ${n}`;
}

console.log(whatNumberIsIt(1 / 0));                             // "Input number is Number.POSITIVE_INFINITY");
console.log(whatNumberIsIt(100));                               // "Input number is 100");
console.log(whatNumberIsIt(1.7976931348623157e+308));           // "Input number is Number.MAX_VALUE");
console.log(whatNumberIsIt(5e-324));                            // "Input number is Number.MIN_VALUE");
console.log(whatNumberIsIt(-Number.MAX_VALUE * 2));             // "Input number is Number.NEGATIVE_INFINITY");
console.log(whatNumberIsIt(NaN));                               // "Input number is Number.NaN");
console.log(whatNumberIsIt(Infinity + 1));                      // "Input number is Number.POSITIVE_INFINITY");

//console.log(NaN === NaN) ????

console.clear();
console.log('----------Crash Override------');


// function aliasGen(a, b) {
//     const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//     const aA = (a[0]).toUpperCase();
//     const bB = (b[0]).toUpperCase();
//     const firstName = { A: 'Alpha', B: 'Beta', C: 'Cache', M: 'Malware' };
//     const surname = { A: 'Analogue', B: 'Bomb', C: 'Catalyst', M: 'Mike' };

//     if (abc.includes(aA) && abc.includes(bB)) {
//        //return `${firstName[aA]} ${surname.[bB]}`;
//     } // const firstName ir const surname was preloaded in codewars
//     return 'Your name must start with a letter from A - Z.';
// }
// 







console.clear();
console.log('-----------No zeros for heros----')


function noBoringZeros(n) {
    let m = n;
    for (let i = 0; i < ('' + n).length; i++) {
        if (m % 10 === 0) {
            m = m / 10;
        }
    }
    return m;
}


console.log(noBoringZeros(1450));       // 145)
console.log(noBoringZeros(960000));     // 96)
console.log(noBoringZeros(1050));       // 105)
console.log(noBoringZeros(-1050));      // -105)
console.log(noBoringZeros(-105));       // -105)
console.log(noBoringZeros(0));           //0)) 

console.clear();
console.log("----------Student's Final Grade----");


function finalGrade(exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    }
    if (exam > 75 || projects >= 5) {
        return 90;
    }
    if (exam > 50 || projects >= 2) {
        return 75;
    } else {
        return 0;
    }
}

console.log(finalGrade(100, 12));   // 100);
console.log(finalGrade(0, 3));     //90);

console.clear();
console.log('-------------Find Multiples of a Number----');

function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i <= limit; i += integer) {
        // if (i % integer === 0) {
        arr.push(i)
    }


    return arr;
}

console.log(findMultiples(5, 25));      // [5, 10, 15, 20, 25])
console.log(findMultiples(1, 2));       // [1, 2])
console.log(findMultiples(5, 7));       // [5])
console.log(findMultiples(4, 27));      // [4, 8, 12, 16, 20, 24])
console.log(findMultiples(11, 54));     // [11, 22, 33, 44])



