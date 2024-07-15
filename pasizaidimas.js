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



const a = [-1, 5, -2, 7, 3];
console.log(a.toSorted())

console.clear();
console.log('-----Missing number in Unordered Arithmetic Progression-----');

function find(seq) {
    const arr = seq.sort(((a, b) => a - b));
    const d = arr[1] - arr[0];
    let t = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0] + i * d) {
            t = arr[0] + i * d;
            break;
        }
    }
    return t;
}

console.log(find([3, 9, 1, 11, 13, 5]));                  // 7)
console.log(find([5, -1, 0, 3, 4, -3, 2, -2]));           // 1)
console.log(find([2, -2, 8, -8, 4, -4, 6, -6]));           // 0)



function find(seq) {
    const newSeq = new Float64Array(seq);
    const arr = newSeq.sort();
    const d = arr[1] - arr[0];
    console.log(newSeq);
    let t = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[0] + i * d) {
            t = arr[0] + i * d;
            break;
        }
    }
    return t;
}



console.log('----------Be Concise IV - Index of an element in an array----------');


const find1 = (a, e) => a.indexOf(e) !== -1 ? a.indexOf(e) : 'Not found';

console.log(find1([1, 3, 9, -6, -9, 8, 0], 0));


console.log(String.fromCharCode(65)); // String.fromCharCode() returns the symbol at that value ASCII

console.clear();
console.log('----------Training JS #18: Methods of String object--concat() split() and its good friend join()-------');

function splitAndMerge(string, separator) {
    const txt = string.split(' ');
    let arr = [];
    for (let i = 0; i < txt.length; i++) {
        arr.push(txt[i].split(''));
    }
    console.log(arr);
    return arr.join(' ').replaceAll(',', separator);
}


console.log(splitAndMerge("My name is John", " "));         // "M y n a m e i s J o h n");
console.log(splitAndMerge("My name is John", "-"));         // "M-y n-a-m-e i-s J-o-h-n");
console.log(splitAndMerge("Hello World!", "."));            // "H.e.l.l.o W.o.r.l.d.!");
console.log(splitAndMerge("Hello World!", ","));            // "H,e,l,l,o W,o,r,l,d,!");


console.clear();
console.log('--------');

function isOpposite(s1, s2) {
    if (s1.length === 0 || s2.length === 0) {
        return false;
    }
    let newS1 = '';
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s1[i].toUpperCase()) {
            newS1 += s1[i].toUpperCase();
        } else if ((s1[i] === s1[i].toUpperCase())) {
            newS1 += s1[i].toLowerCase();
        }
    }
    return newS1 === s2;
}


console.log(isOpposite("ab", "AB"));                 // true);
console.log(isOpposite("aB", "Ab"));                 // true);
console.log(isOpposite("aBcd", "AbCD"));            // true);
console.log(isOpposite("aBcde", "AbCD"));           // false);
console.log(isOpposite("AB", "Ab"));                 // false);
console.log(isOpposite("", ""));                     // false);

console.clear();
console.log('---------Training JS #29: methods of arrayObject---concat() and join()-------');

function bigToSmall(arr) {
    const newArr = (arr.flat()).sort((a, b) => a - b).reverse();
    return newArr.join('>');
}

console.log(bigToSmall([[1, 2], [3, 4], [5, 6]]));      // "6>5>4>3>2>1");
console.log(bigToSmall([[1, 3, 5], [2, 4, 6]]));        // "6>5>4>3>2>1");
console.log(bigToSmall([[1, 1], [1], [1, 1]]));     // "1>1>1>1>1");

console.clear();
console.log('---------Training JS #6: Basic data types--Boolean and conditional statements if..else-----');

function trueOrFalse(val) {
    if (val == false || val === undefined || val === null) {
        return 'false';
    } else {
        return 'true';
    }
}

let a1 = 1, b = 2, c = 1;
console.log(trueOrFalse(a1 > b));       // "false");
console.log(trueOrFalse(a1 === b));     // "false");
console.log(trueOrFalse(a1 < b));       // "true");
console.log(trueOrFalse(a1 !== b));     // "true");
console.log(trueOrFalse(b > c));        // "true");
console.log(trueOrFalse(b === c));      // "false");
console.log(trueOrFalse(b < c));        // "false");
console.log(trueOrFalse(b !== c));      // "true");
console.log(trueOrFalse(a1 === c));     // "true");
console.log(trueOrFalse(a1 !== c));     // "false");
//test for logical operators and bitwise operators
let t = true, f = false;
console.log(trueOrFalse(t && f));        // "false");
console.log(trueOrFalse(f && f));        // "false");
console.log(trueOrFalse(t && t));        // "true");
console.log(trueOrFalse(t || f));        // "true");
console.log(trueOrFalse(t || t));        // "true");
console.log(trueOrFalse(f || f));        // "false");
console.log(trueOrFalse(t & f));         // "false");
console.log(trueOrFalse(t & t));         //"true");
console.log(trueOrFalse(f & f));         // "false");
console.log(trueOrFalse(t | f));         //"true");
console.log(trueOrFalse(t | t));         //"true");
console.log(trueOrFalse(f | f));         //"false");
console.log(trueOrFalse(!t));            // "false");
console.log(trueOrFalse(!f));            // "true");
console.log(trueOrFalse(t ^ f));         // "true");
console.log(trueOrFalse(t ^ t));         // "false");
console.log(trueOrFalse(f ^ f));         // "false");
// test for implicit conversion
console.log(trueOrFalse(true));          //   "true");
console.log(trueOrFalse(123));           //   "true");
console.log(trueOrFalse("123"));         //    "true");
console.log(trueOrFalse(["123"]));       //    "true");
console.log(trueOrFalse("false"));       //    "true");
console.log(trueOrFalse(false));         //   "false");
console.log(trueOrFalse(0));             //     "false");
console.log(trueOrFalse(""));            //  "false");
console.log(trueOrFalse(null));          //  "false");
console.log(trueOrFalse([].length));     //    "false");
console.log(trueOrFalse(undefined));     //    "false");




function changeMe(moneyIn) {
    if (moneyIn !== '20p' && moneyIn !== '50p' && moneyIn !== '£1' && moneyIn !== '£2' && moneyIn !== '£5') {
        return 'Wrong input.';
    }
    if (moneyIn === '20p') {
        return '10p 10p';
    }
    const coins = {
        '£5': 500,
        '£2': 200,
        '£1': 100,
        '50p': 50,
        '20p': 20,
    };
    const coins20 = Math.floor(coins[moneyIn] / 20);
    const coins10 = (coins[moneyIn] % 20) / 10;
    const txt = `${'20p '.repeat(coins20)}${'10p'.repeat(coins10)}`;
    return txt.trim();
}


console.log(changeMe('£1'));
console.log(changeMe('Money'));
console.log(changeMe('£2'));
console.log(changeMe('£5'));
console.log(changeMe('50p'));
console.log(changeMe('20p'));


//age comparison;
const describeAge = age => age <= 12 ? t1 + 'kid' : (age > 12 && age <= 17 ? t1 + 'teenager' : (age > 17) && age <= 64 ? t1 + 'adult' : t1 + 'elderly');
const t1 = "You're a(n) ";


console.clear();
console.log('---------Bubblesort Once-------');

function bubblesortOnce(a) {
    let newA = [...a];
    for (let i = 0; i < newA.length; i++) {
        if (newA[i] > newA[i + 1]) {
            newA[i + 1] = newA[i],
                newA[i] = a[i + 1];
        }
    }
    return newA;
}

console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]));       //[7, 5, 3, 1, 2, 4, 6, 8, 9]
console.log(bubblesortOnce([103, 113, 87]));       //[7, 5, 3, 1, 2, 4, 6, 8, 9]
console.log(bubblesortOnce([2, 3, 5, 1, 7, 4, 6, 8, 9, 10]));       //[7, 5, 3, 1, 2, 4, 6, 8, 9]
console.log(bubblesortOnce([2, 4, 1]));       //[7, 5, 3, 1, 2, 4, 6, 8, 9]

// String.prototype.isUpperCase = function () {
//     if (String(this).length === 0) {
//         return true;
//     }
//     if (String(this) === this.toUpperCase()) {
//         return true;
//     }
//     return false;
// } Kaip sitas reikals veikia???

console.clear();
console.log('-----Thinking & Testing : How many "word"?-----');

function testit(s) {
    let sum = 0;
    let n = ['W', 'O', 'R', 'D'];
    let z = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i].toUpperCase() === n[z]) {
            z++, sum++;
        }
        if (z > 3) {
            z = 0;
        }
    }
    return Math.floor(sum / 4);
}

console.log(testit("word"));                                                                                       //  1, "");
console.log(testit("hello world"));                                                                                //  1, "");
console.log(testit("I love codewars."));                                                                           //  0, "");
console.log(testit("My cat waiting for a dog."));                                                                  //  1, "");
console.log(testit("We often read book, a word hidden in the book."));                                             //  2, "");
console.log(testit("When you in order to do something by a wrong way, your heart will missed somewhere."));        //  2, "");
console.log(testit("This sentence have one word."));                                                               //  1, "");
console.log(testit("This sentence have two word, not one word."));                                                 //  2, "");
console.log(testit("One word + one word = three word ;-)"));                                                       //  3, "");
console.log(testit("Can you find more word for me?"));                                                             //  1, "");

console.clear();
console.log('-------Thinking & Testing : Something capitalized-----');

function testit(s) {
    let sS = s.split(' ');
    console.log(sS);
    let newS = '';
    for (let i = 0; i < sS.length; i++) {
        if (sS[i].length === 1) {
            newS += sS[i].toUpperCase() + ' ';
        } else if ((sS[i].length > 1)) {
            newS += sS[i].slice(0, - 1) + sS[i][(sS[i]).length - 1].toUpperCase() + ' ';
        }
    }
    return newS.trim();
}

console.log(testit(""));             // "", "")
console.log(testit("a"));            // "A", "")
console.log(testit("b"));            // "B", "")
console.log(testit("a a"));          // "A A", "")
console.log(testit("a b"));          // "A B", "")
console.log(testit("a b c"));        //"A B C", "")
console.log(testit("ab ab"));        //"aB aB", "")

console.log('labas'.slice(0, -1))

console.clear();
console.log('-----------Unique In Order------------');


const uniqueInOrder = function (iterable) {
    const arr = [];
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            arr.push(iterable[i]);
        }
    }
    return arr;
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));      // ['A', 'B', 'C', 'D', 'A', 'B'])


console.clear();
console.log('--------------------Collatz Conjecture (3n+1)------------');

const hotpo = function (n) {
    if (n === 0 || n === 1) {
        return 0;
    }
    let m = n;
    let t = 0;
    for (let i = 0; i >= 0; i++) {
        if (m === 1) {
            break;
        }
        else if (m % 2 === 0) {
            m /= 2, t++;
        }
        else if (m % 2 !== 0) {
            m = 3 * m + 1, t++;
        }
    }
    return t;
}

console.log(hotpo(1));          // 0);
console.log(hotpo(5));          // 5);
console.log(hotpo(6));          // 8);
console.log(hotpo(23));         // 15);


console.log('labaslabas'.slice(3, 6))

console.clear();
console.log('-----Sum The Strings-----');

function sumStr(a, b) {
    if (a.length === 0 && b.length === 0) {
        return 0;
    }
    if (a.length === 0) {
        let sum = 0 + parseInt(b);
    }
    if (b.length === 0) {
        sum = 0 + parseInt(a);
    }
    sum = parseInt(a) + parseInt(b);
    return '' + sum;
}

console.log(sumStr("4", "5"));           // "9");
console.log(sumStr("34", "5"));         // "39");
console.log(sumStr("jonas", "5"));         // "39");
console.log(sumStr("34", "5"));         // "39");

console.clear();
console.log('-----Flick Switch----');


function flickSwitch(arr) {
    let newArr = [];
    let x = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 'flick') {
            newArr.push(x);
        } else if (arr[i] === 'flick') {
            x = !x,
                newArr.push(x);
        }
    }
    return newArr;
}


console.log(flickSwitch(["codewars", "flick", "code", "wars"]));                                   //           [true, false, false, false]);
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]));                         //           [false, false, false, false]);
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));                       //          [true, true, false, false, true]);
console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]));                           //           [false, true, false, true, false]);
console.log(flickSwitch(["john, smith, susan", "flick"]));                                         //          [true, false]);
console.log(flickSwitch(["bicycle"]));                                                             //          [true]);
console.log(flickSwitch(["flick"]));                                                               //          [false]);
console.log(flickSwitch([])); //[]);                                                                 



console.clear();
console.log('------Training JS #12: loop statement --for..in and for..of----');


function giveMeFive(obj) {
    let arr = [];
    for (let key in obj) {
        if (key.length === 5) {
            arr.push(key);
        }
        if (obj[key].length === 5) {
            arr.push(obj[key])
        }
    }
    return arr;
}

console.log(giveMeFive({ Our: "earth", is: "a", beautyful: "world" }));                         // ["earth", "world"]);
console.log(giveMeFive({ Ihave: "enough", money: "to", buy: "a", car: "model" }));              // ["Ihave", "money", "model"]);
console.log(giveMeFive({ Pears: "than1", apple: "sweet" }));                                     // ["Pears", "apple", "sweet"]);

console.clear();
console.log('--------------Training JS #9: loop statement --while and do..while-----');


function padIt(str, n) {
    let txt1 = '';
    let txt2 = '';
    let m = 0;
    while (m < n) {
        m++;
        if ((n - m) % 2 === 0) {
            txt1 += '*';
        }
        if ((n - m) % 2 !== 0) {
            txt2 += "*"
        }
    }
    return txt1 + str + txt2;
}


console.log(padIt("a", 1));         // "*a");
console.log(padIt("a", 2));         // "*a*");
console.log(padIt("a", 3));         // "**a*");
console.log(padIt("a", 4));         // "**a**");
console.log(padIt("a", 5));         // "***a**");


console.clear();
console.log('------Simple Fun #352: Reagent Formula-----');

function isValid(formula) {
    if (formula.includes(1) && formula.includes(2)) {
        return false;
    } else if (formula.includes(3) && formula.includes(4)) {
        return false;
    } else if (formula.includes(5) && !(formula.includes(6)) || formula.includes(6) && !(formula.includes(5))) {
        return false;
    } else if (formula.includes(7) || formula.includes(8)) {
        return true;
    } else {
        return false;
    }
}

console.log(isValid([1, 3, 7]));                 // true)
console.log(isValid([7, 1, 2, 3]));                  // false)
console.log(isValid([1, 3, 5, 7]));                  // false)
console.log(isValid([1, 5, 6, 7, 3]));                   // true)
console.log(isValid([5, 6, 7]));                 // true)
console.log(isValid([5, 6, 7, 8]));                  // true)
console.log(isValid([6, 7, 8]));                 // false)
console.log(isValid([7, 8]));                    // true)


console.clear();
console.log('------------Simple Fun #18: Candles--------------');


function candles(candlesNumber, makeNew) {
    let candles = candlesNumber; //3 / 1 / 1
    let left = 0;                //2 / 2 / 0
    let sum = 0;               //3 + 1 + 1
    while (true) {
        sum += Math.floor((candles + left) / makeNew);
        candles = Math.floor((candles + left) / makeNew);
        left = (candles + left) % makeNew;
        if ((candles + left) / makeNew < 1) {
            break;
        }

    }
    return sum + candlesNumber;
}


console.log(candles(5, 2));                 // 9, 'candles(5, 2)')
console.log(candles(1, 2));                 // 1, 'candles(1, 2)')
console.log(candles(3, 3));                 // 4, 'candles(3, 3)')
console.log(candles(11, 3));                    // 16, 'candles(11, 3)')
// console.log(candles(34, 2));                    // 67,
// console.log(candles(35, 2));                    // 67, 

console.clear();
console.log('----------Ordered Count of Characters--------');

const orderedCount = function (text) {
    let newText = text;
    let arr = [];
    while (newText.length > 0) {
        const length = newText.length - (newText.replaceAll(`${newText[0]}`, '')).length;
        arr.push([newText[0], length]);
        newText = newText.replaceAll(newText[0], '');

    }
    return arr;
}




console.log(orderedCount("abracadabra"));          // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]],
console.log(orderedCount("Code Wars"));            //[['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]],
console.log(orderedCount("233312"));           // [['2', 2], ['3', 3], ['1', 1]]],


console.clear();
console.log('-----------Make the Deadfish Swim--------');

function parse(text) {
    const newText = text.toUpperCase();
    let result = 0;
    let arr = [];
    for (const index of newText) {
        console.log(result);
        if (index === 'I') {
            result += 1;
        } else if (index === 'D') {
            result -= 1;
        } else if (index === 'S') {
            result = result ** 2;
        } else if (index === 'O') {
            arr.push(result);
        }
    }
    return arr;
}


console.log(parse("iiisdoso"));             // [8, 64]);
console.log(parse("iiisxxxdoso"));              // [8, 64]);

console.clear();
console.log('----------Begin your day with a challenge, but an easy one.-----');


function oneTwoThree(n) {
    if (n === 0) {
        return ['0', '0'];
    }
    const text = '' + n;
    let arr = [];
    let txt = '';
    for (let i = text.length - 1; i > -1; i--) {
        txt += text[i].repeat(i + 1);
    }
    arr.push(txt);
    arr.push('1'.repeat(n));
    return arr;
}

console.log(oneTwoThree(140));

console.clear();
console.log('------Training JS #14: Methods of Number object--toString() and toLocaleString()---');

function colorOf(r, g, b) {
    let r1 = r.toString(16);
    let g1 = g.toString(16);
    let b1 = b.toString(16);
    if (r1.length === 1) {
        r1 = '0' + r1;
    }
    if (g1.length === 1) {
        g1 = '0' + g1;
    }
    if (b1.length === 1) {
        b1 = '0' + b1;
    }
    const color = `#${r1}${g1}${b1}`;
    return color;
}

console.log(colorOf(255, 0, 0));         // "#ff0000");

console.log(colorOf(0, 111, 0));         // "#006f00");

console.log(colorOf(1, 2, 3));           // "#010203");


console.clear();
console.log('---------Training Time-------');


function shuffleIt(arr, ...restOfDict) {
    const input = [...restOfDict];
    const newArr = [...arr];
    for (let i = 0; i < input.length; i++) {
        const arr1 = [...newArr];
        newArr[input[i][0]] = arr1[input[i][1]],
            newArr[input[i][1]] = arr1[input[i][0]];

    }
    return newArr;
}


console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2]));                       // [1, 3, 2, 4, 5]);
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4]));               // [1, 3, 2, 5, 4]);
console.log(shuffleIt([1, 2, 3, 4, 5], [1, 2], [3, 4], [2, 3]));       // [1, 3, 5, 2, 4]);

console.clear();
console.log(`------------Training JS #36: methods of Math---kata author's lover: random()-------------`);

function rndCode() {
    const text = "ABCDEFGHIJKLM";
    const symbols = "~!@#$%^&*";
    const a = (Math.floor(Math.random() * 13));
    const b = (Math.floor(Math.random() * 13));
    const c = (Math.floor(Math.random() * 10));
    const d = (Math.floor(Math.random() * 10));
    const e = (Math.floor(Math.random() * 10));
    const f = (Math.floor(Math.random() * 10));
    const g = (Math.floor(Math.random() * 9));
    const h = (Math.floor(Math.random() * 9));
    let code = `${text[a]}${text[b]}${c}${d}${e}${f}${symbols[g]}${symbols[h]}`;
    return code;
}

console.log(rndCode());

console.clear();
console.log(`------------Training JS #30: methods of arrayObject---reduce() and reduceRight()-------------`);

function tailAndHead(arr) {
    const arr1 = arr.map((a) => a + '').map((a) => parseInt(a.at(-1)));
    const arr2 = arr.map((a) => a + '').map((a) => parseInt(a.at(0)));
    let arr3 = [];
    for (let i = 0; i < arr1.length - 1; i++) {
        arr3.push(arr1[i] + arr2[i + 1])
    }
    arr3 = arr3.reduce((a, b) => a * b);
    return arr3;
}

console.log(tailAndHead([123, 456, 789, 12, 34, 56, 78]));                    //   532350);
console.log(tailAndHead([35456, 782, 569, 2454, 875]));                       //   12012);
console.log(tailAndHead([1, 2, 3, 4, 5]));                                    //   945);
console.log(tailAndHead([111, 2345, 66, 78, 900]));                           //  7293);
// 7 13 10 5 9 13


function tailAndHead1(arr) {
    const arr1 = arr.map((a) => a + '');
    const arr2 = arr.map((a) => a + '');
    let arr3 = [];
    let array1 = [];
    let array2 = [];
    for (let i = 0; i < arr1.length - 1; i++) {
        array1.push(parseInt(arr1[i][arr1[i].length - 1]));
        array2.push(parseInt(arr1[i + 1][0]));
    }
    for (let i = 0; i < array1.length; i++) {
        arr3.push(array1[i] + array2[i])
    }
    arr3 = arr3.reduce((a, b) => a * b);
    return arr3;
}
// arr.push(arr1[i] + arr2[i + 1])

console.log(tailAndHead1([123, 456, 789, 12, 34, 56, 78]));                    //   532350);
console.log(tailAndHead1([35456, 782, 569, 2454, 875]));                       //   12012);
console.log(tailAndHead1([1, 2, 3, 4, 5]));                                    //   945);
console.log(tailAndHead1([111, 2345, 66, 78, 900]));                           //  7293);


console.clear();
console.log('----------Welcome!-------');


function greet(language) {
    const text = language.toLowerCase();
    const welcome = {
        english: "Welcome",
        czech: "Vitejte",
        danish: "Velkomst",
        dutch: "Welkom",
        estonian: "Tere tulemast",
        finnish: "Tervetuloa",
        flemish: "Welgekomen",
        french: "Bienvenue",
        german: "Willkommen",
        irish: "Failte",
        italian: "Benvenuto",
        latvian: "Gaidits",
        lithuanian: "Laukiamas",
        polish: "Witamy",
        spanish: "Bienvenido",
        swedish: "Valkommen",
        welsh: "Croeso",
    };
    if (welcome[text] === undefined) {
        return welcome['english'];
    }
    return welcome[text];
}

console.log(greet('irish'));

console.clear();
console.log('----------CSV representation of array------------');

function toCsvText(array) {
    let text = '';
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            text += array[i];
        } else {
            text += array[i] + 'n';
        }
    }
    return text;
}


console.log(toCsvText([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]
]));                                 //'0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');

console.log(toCsvText([
    [-25, 21, 2, -33, 48],
    [30, 31, -32, 33, -34]
]));                                //'-25,21,2,-33,48\n30,31,-32,33,-34');

console.log(toCsvText([
    [5, 55, 5, 5, 55],
    [6, 6, 66, 23, 24],
    [666, 31, 66, 33, 7]
]));                            // '5,55,5,5,55\n6,6,66,23,24\n666,31,66,33,7');


console.clear();
console.log('----------Training JS #27: methods of arrayObject---filter()-----------');

function countGrade(scores) {
    const s = scores.filter(x => x === 100).length;
    const a = scores.filter(x => 90 <= x && x < 100).length;
    const b = scores.filter(x => 80 <= x && x < 90).length;
    const c = scores.filter(x => 60 <= x && x < 80).length;
    const d = scores.filter(x => 0 <= x && x < 60).length;
    const x = scores.filter(x => x === -1).length;
    const result = { S: s, A: a, B: b, C: c, D: d, X: x };
    return result;
}

console.log(countGrade([50, 60, 70, 80, 90, 100]));                //  { S: 1, A: 1, B: 1, C: 2, D: 1, X: 0 });
console.log(countGrade([65, 75, , 85, 85, 95, 100, 100]));         //  { S: 2, A: 1, B: 2, C: 2, D: 0, X: 0 });
console.log(countGrade([-1, -1, -1, -1, -1, -1]));                 //  { S: 0, A: 0, B: 0, C: 0, D: 0, X: 6 });

console.clear();
console.log('---------Training JS #26: methods of arrayObject---map()-------------');

function isolateIt(arr) {
    const newArr = arr.map(a => ('' + a).slice(0, Math.floor(a.length / 2)));
    const newArr1 = arr.map(a => a.length % 2 === 0 ? ('' + a).slice(Math.floor(a.length / 2)) : ('' + a).slice(Math.ceil(a.length / 2)));
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(newArr[i] + '|' + newArr1[i]);
    }
    return result;
}


console.log(isolateIt(["abcd", "efgh"]));       // ["ab|cd", "ef|gh"]);
console.log(isolateIt(["abcde", "fghij"]));     // ["ab|de", "fg|ij"]);
console.log(isolateIt(["1234", "56789"]));      // ["12|34", "56|89"]);

function isolateIt1(arr) {
    return arr.map(s => s.slice(0, s.length / 2) + "|" + s.slice(-s.length / 2));
}

console.log(isolateIt1(["abcd", "efgh"]));       // ["ab|cd", "ef|gh"]);
console.log(isolateIt1(["abcde", "fghij"]));     // ["ab|de", "fg|ij"]);
console.log(isolateIt1(["1234", "56789"]));      // ["12|34", "56|89"]);

console.clear();
console.log('--------Training JS #28: methods of arrayObject---every() and some()------------');

function mirrorImage(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === parseInt(('' + arr[i + 1]).split('').reverse().join(''))) {
            newArr.push(arr[i]);
            newArr.push(arr[i + 1]);
            break;
        }
    }
    if (newArr.length === 0) {
        return [-1, -1];
    }
    return newArr;
}

console.log(mirrorImage([11, 22, 33, 33, 22, 11]));         // [33, 33]);
console.log(mirrorImage([454, 86, 57, 75, 16, 88]));            // [57, 75]);
console.log(mirrorImage([454, 0, 57, 0, 16, 88]));          // [-1, -1]);


console.clear();
console.log('-------------Sort My Textbooks-----------');

function sorter(textbooks) {
    const result = textbooks.sort((a2, b2) => {
        const txtA = a2.toUpperCase(); // ignore upper and lowercase
        const txtB = b2.toUpperCase(); // ignore upper and lowercase
        if (txtA < txtB) {
            return -1;
        }
        if (txtA > txtB) {
            return 1;
        }
        // names must be equal
        return 0;
    })
    return result;
}


console.log(sorter(['Algebra', 'History', 'Geometry', 'English']));
// ['Algebra', 'English', 'Geometry', 'History']);


console.log(sorter(['Algebra', 'history', 'Geometry', 'english']));
// ['Algebra', 'english', 'Geometry', 'history']);


console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']));
// ['$istory', '**english', 'Alg#bra', 'Geom^try']);


console.clear();
console.log('------Largest 5 digit number in a series-----');

function solution(digits) {
    let arr = [];
    for (let i = 0; i < digits.length; i++) {
        arr.push(digits.slice(i, i + 5));
        arr.push(digits.slice(i + 5, i + 10));
    }
    let big = parseInt(arr[0]);
    for (let i = 0; i < arr.length; i++) {
        if (big < parseInt(arr[i])) {
            big = parseInt(arr[i]);
        }
    }
    return big;
}




// console.log(solution("731671761531330624919225196742657474235534919493496983520368542506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753123457977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257540920752963450"));
console.log(solution('6248909014293157374325734426843353037'));

console.clear();
console.log('--------------My Language Skills--------------');

function myLanguages(results) {
    const arr = Object.getOwnPropertyNames(results);
    let newArr = [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (results[arr[i]] >= 60) {
            newArr.push({ name: arr[i], score: results[arr[i]] });
        }
    }
    newArr.sort((a, b) => b.score - a.score);
    for (let i = 0; i < newArr.length; i++) {
        result.push(newArr[i].name);
    }
    return result;
}

console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }));
console.log(myLanguages({ "Greek": 71, "Hindi": 60, "Dutch": 93 }));



console.clear();
console.log('---------Sum without highest and lowest number----------');


function sumArray(array) {
    if (Array.isArray(array) === false || array.length <= 1) {
        return 0;
    }
    let sum = 0;
    let max = array[0];
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log(min, max);
    return sum - max - min;
}

console.log(sumArray(null));                             //    0);
console.log(sumArray([]));                               //    0);
console.log(sumArray([3]));                              //    0);
console.log(sumArray([3, 5]));                           //    0);
console.log(sumArray([6, 2, 1, 8, 10]));                 //    16);
console.log(sumArray([0, 1, 6, 10, 10]));                //    17);
console.log(sumArray([-6, -20, -1, -10, -12]));          //   -28);
console.log(sumArray([-6, 20, -1, 10, -12]));            //    3);


console.clear();
console.log('----------Count of positives / sum of negatives-----------');


function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return [];
    }
    let neg = [];
    let pos = 0;
    const sort = (input.map((a) => a > 0 ? pos++ : neg.push(a)));
    const negSum = neg.reduce((a, b) => a + b);
    return [pos, negSum];
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));


console.clear();
console.log('----------Grasshopper - Terminal game combat function---------');


function combat(health, damage) {
    const life = health - damage;
    if (life <= 0) {
        return 0;
    } else {
        return life;
    }
}

console.log(combat(100, 5));            //         , 95);
console.log(combat(92, 8));             //          , 84);
console.log(combat(20, 30));            //         , 0, "Health cannot go below 0");


console.clear();
console.log('-------Merging sorted integer arrays (without duplicates)------------');



function mergeArrays(a, b) {
    let arr = [];
    for (let i = 0; i < b.length; i++) {
        if (a.includes(b[i]) === false) {
            a.push(b[i]);
        }
    }
    const array = a.sort((n, m) => n - m);
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) {
            arr.push(array[i]);
        }
    }
    return arr;
}

console.log(mergeArrays([1, 1, 3, 5], [2, 4, 6]));         // [1, 2, 3, 4, 5, 6]);
console.log(mergeArrays([2, 4, 8], [2, 4, 6]));         // [2, 4, 6, 8]);

console.clear();

function remove(string) {
    let s = string;
    for (let i = string.length - 1; i > -1; i--) {
        if (string[i] === '!') {
            s = s.slice(0, s.length - 1);
        } else {
            break;
        }
    }
    return s;
}

console.log(remove('!!!Hi!!!'));
console.log('labasrytas'.replace('labasrytas'[8], ''));


console.clear();
console.log('-----------Evil or Odious-------');

function evil(n) {
    const dec = n.toString(2);
    let sum = 0;
    for (let i = 0; i < dec.length; i++) {
        if (dec[i] === '1') {
            sum++;
        }
    }
    if (sum % 2 === 0) {
        return `It's Evil!`;
    } else {
        return `It's Odious!`;
    }
}

console.log(evil(1));      /// "It's Odious!");
console.log(evil(2));      /// "It's Odious!");
console.log(evil(3));      /// "It's Evil!");
console.log(evil(20));      /// "It's Evil!");


console.clear();
console.log('----------Check same case---------');


function sameCase(a, b) {
    const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    if (abc.includes(a.toUpperCase()) && abc.includes(b.toUpperCase()) && a.toUpperCase() === a && b.toUpperCase() === b) {
        return 1;
    } else if (abc.includes(a.toUpperCase()) && abc.includes(b.toUpperCase()) && a.toLowerCase() === a && b.toLowerCase() === b) {
        return 1;
    } else if (abc.includes(a.toUpperCase()) && abc.includes(b.toUpperCase())) {
        return 0;
    } else {
        return -1;
    }
}

console.log(sameCase('C', 'B'));         // 1);
console.log(sameCase('b', 'a'));         // 1);
console.log(sameCase('d', 'd'));         // 1);
console.log(sameCase('A', 's'));         // 0);
console.log(sameCase('c', 'B'));         // 0);
console.log(sameCase('b', 'Z'));         // 0);
console.log(sameCase('\t', 'Z'));        // -1);
console.log(sameCase('H', ':'));         // -1);

console.clear();
console.log('-----------Hello, Name or World!----------');


function hello(name) {
    this.name = name;
    if (this.name === undefined) {
        return 'Hello, World!';
    }
    if (name.length === 0) {
        return 'Hello, World!';
    }
    const txt = name[0].toUpperCase();
    return 'Hello, ' + `${txt}${(name.toLowerCase()).slice(1)}!`;
}

console.log(hello('jOhN'));
console.log(hello(''));
console.log(hello());

console.clear();
console.log('------------Sum of differences in array-------');


function sumOfDifferences(arr) {
    const newArr = arr.sort((a, b) => b - a);
    let array = [];
    for (let i = 0; i < newArr.length - 1; i++) {
        array.push(newArr[i] - newArr[i + 1]);
    }
    console.log(newArr);
    return array.reduce((a, b) => a + b);
}


console.log(sumOfDifferences([1, 2, 10]));
console.log(sumOfDifferences([-3, -2, -1]));

console.clear();
console.log('----------Stringy Strings----------');

function stringy(size) {
    if (typeof (size) !== 'number' || '' + size === 'NaN' || size === Infinity || size === -Infinity) {
        return 'Wrong input';
    }
    // const s = parseInt(size);
    let result = '';
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            result += 1;
        } else {
            result += 0;
        }
    }
    return result;
}

console.log(stringy(3)[0]);
console.log(stringy(3));

console.clear();
console.log('-----Genetic Algorithm Series - #3 Crossover---------');


const crossover = (chromosome1, chromosome2, index) => {
    const cros1 = chromosome1.slice(0, index) + chromosome2.slice(index);
    const cros2 = chromosome2.slice(0, index) + chromosome1.slice(index);
    return [cros1, cros2];
}

console.log(crossover('110', '001', 2));


console.clear();
console.log('-------noobCode 03: CHECK THESE LETTERS... see if letters in "String 2" are present in "String 1"------');


function letterCheck(arr) {
    let array = [true, true];
    for (let i = 0; i < arr[1].length; i++) {
        if (arr[0].toLowerCase().includes(arr[1].toLowerCase()[i])) {
            array[0] = true;
        } else {
            array[1] = false;
        }
    }
    return array[0] && array[1];
}


console.log(letterCheck(["trances", "nectar"]));                      //true)
console.log(letterCheck(["THE EYES", "they see"]));                   //true)
console.log(letterCheck(["assert", "staring"]));                      //false)
console.log(letterCheck(["arches", "later"]));                        //false)
console.log(letterCheck(["dale", "caller"]));                         //false)
console.log(letterCheck(["parses", "parsecs"]));                      //false)
console.log(letterCheck(["replays", "adam"]));                        //false)
console.log(letterCheck(["mastering", "streaming"]));                 //true)
console.log(letterCheck(["drapes", "compadres"]));                    //false)
console.log(letterCheck(["deltas", "slated"]));                       //true)


console.clear();
console.log('--------compute cube as sums------');



function findSummands(n) {
    let num = 0;
    let arr = [];
    if (n === 1) {
        return [n];
    }
    if (n % 2 === 0) {
        num = n ** 3 / n - 1 - (n / 2 - 1) * 2;
    } else {
        num = n ** 3 / n - (n - 1);
    }
    arr.push(num);
    for (let i = 1; i < n; i++) {
        arr.push(num += 2);
    }
    return arr;
}


console.log(findSummands(8));


console.clear();
console.log('-------------String incrementer--------');


function incrementString(strng) {
    let arr = [];
    let arr1 = [];
    if ('' + parseInt(strng[strng.length - 1]) === 'NaN') {
        return strng + 1;
    }
    for (let i = strng.length - 1; i > -1; i--) {
        if (('' + parseInt(strng[i])) !== 'NaN') {
            arr.unshift(parseInt(strng[i]))
        } else {
            break;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr1 = [...arr.splice(i)];
        }
    }
    let start = strng.slice(0, strng.length - arr1.length);
    let end = parseInt(('' + arr1).replaceAll(',', '')) + 1;
    if (arr1.length === 0) {
        end = 1;
    }
    if (('' + end).length > ('' + arr1).replaceAll(',', '').length && arr[0] === 0) {
        start = strng.slice(0, strng.length - arr1.length - 1);
    }
    return start + end;
}


console.log(incrementString('foobar0'));
console.log(incrementString('foob99ar09999'));


console.clear();
console.log('-----------The Hashtag Generator-------------');


function generateHashtag(str) {
    const txt = str.trim();
    if (txt.length === 0) {
        return false;
    }
    const arr = txt.split(' ').filter((a) => a !== '').map((a => a[0] === a[0].toUpperCase() ? a = a : a = a[0].toUpperCase() + a.slice(1)));
    const result = arr.join('');
    if (result[0] === '#' && result.length > 140) {
        return false;
    } else if (result[0] === '#' && result.length <= 140) {
        return result;
    } else if (result.length <= 139) {
        return '#' + result;
    } else {
        return false;
    }
}

console.log(generateHashtag('Codewars Is Nice'));
console.log(generateHashtag('Codewars is nice'));
console.log(generateHashtag("code" + " ".repeat(140) + "wars"));
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));


console.clear();
console.log('-----------Directions Reduction------');

function dirReduc(arr) {
    let str = arr.join(',');
    for (let i = 0; i < arr.length; i++) {
        str = str.replaceAll('NORTH,SOUTH', '').replaceAll('SOUTH,NORTH', '').replaceAll('EAST,WEST', '').replaceAll('WEST,EAST', '').replaceAll(',,', ',');
    }
    str = str.split(',').filter(a => a !== '');
    return str;
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));

console.clear();
console.log('--------First None Consecutive number-----------');


function firstNonConsecutive(arr) {
    let result = null;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 !== arr[i + 1]) {
            result = arr[i + 1];
            break;
        }
    }
    return result;
}

console.log(firstNonConsecutive([-2, -1, 0, 2, 3, 6, 7]));


console.clear();
console.log('----------Remove First and Last Character Part Two-------');


function array(string) {
    let arr = string.split(',');
    if (arr.length < 3) {
        return null
    } else {
        arr = arr.slice(1, arr.length - 1)
    }
    return arr.join(' ');
}

//nebaigtas sprendimas


console.log(array(''));                       //  null);
console.log(array('1'));                      //  null);
console.log(array('A1,B2'));                  //  null);
console.log(array('1,2,3'));                  //  '2');
console.log(array('1,2,3,4'));                //  '2 3');
console.log(array('A1,B2,C3,D4,E5'));         //  'B2 C3 D4');
console.log(array('A,1,23,456,78,9,Z'));      //  '1 23 456 78 9')

console.clear();
console.log('--------Greed is Good----------');

function score(dice) {
    const score = ['X', 1000, 200, 300, 400, 500, 600];
    const arr = ['X'];
    let index = null;
    arr.push((dice.filter((a) => a === 1)).length);
    arr.push((dice.filter((a) => a === 2)).length);
    arr.push((dice.filter((a) => a === 3)).length);
    arr.push((dice.filter((a) => a === 4)).length);
    arr.push((dice.filter((a) => a === 5)).length);
    arr.push((dice.filter((a) => a === 6)).length);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 3) {
            index = i;
        }
    }
    if (index !== null) {
        arr[index] = arr[index] - 3;
        const sum = score[index] + arr[1] * 100 + arr[5] * 50;
        return sum;
    } else {
        return arr[1] * 100 + arr[5] * 50;
    }
}


console.log(score([2, 3, 4, 6, 2]));   // 0, "Incorrect answer for dice = [2, 3, 4, 6, 2]");
console.log(score([4, 4, 4, 3, 3]));   // 400, "Incorrect answer for dice = [4, 4, 4, 3, 3]");
console.log(score([2, 4, 4, 5, 4]));   // 450, "Incorrect answer for dice = [2, 4, 4, 5, 4]");


console.clear();
console.log('-----------Arguments to Binary addition----------');


function arr2bin(arr) {
    const numArr = arr.filter(a => typeof a === 'number');
    if (numArr.length === 0) {
        return '0';
    } else {
        const sum = numArr.reduce((a, b) => a + b);
        return sum.toString(2);
    }
}


console.log(arr2bin([1, 2]));                    // "11")
console.log(arr2bin([1, 2, 3, 4, 5]));           // "1111")
console.log(arr2bin([1, 10, 100, 1000]));        // "10001010111")
console.log(arr2bin([null]));                    // "0")
console.log(arr2bin([true, true, false, 15]));   // "1111")

console.clear();
console.log('-------------Sort with a sorting array-------------');

function sort(initialArray, sortingArray) {
    const arr = [];
    for (let i = 0; i < initialArray.length; i++) {
        arr[sortingArray[i]] = initialArray[i];
    }
    return arr;
}

console.log(sort(['x', 'y', 'z'], [1, 2, 0]));                                               // ["z", "x", "y"], "For initialArray = ['x', 'y', 'z'], sortingArray = [1, 2, 0]");
console.log(sort(['x', 'y', 'z'], [0, 1, 2]));                                               // ['x', 'y', 'z'], "For initialArray = ['x', 'y', 'z'], sortingArray = [0, 1, 2]");
console.log(sort([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]));                                         // [1, 2, 3, 4, 5], "For initialArray = [1, 2, 3, 4, 5], sortingArray = [0, 1, 2, 3, 4]");
console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]));                                         // [1, 3, 2, 5, 4], "For initialArray = [1, 2, 3, 4, 5], sortingArray = [0, 2, 1, 4, 3]");
console.log(sort(['o', 78, 26, 16, 75, 57, 'g'], [1, 5, 2, 3, 0, 6, 4]));                    // [ 75, 'o', 26, 16, 'g', 78, 57 ], "For initialArray = [1, 2, 3, 4, 5], sortingArray = [0, 2, 1, 4, 3]");


// console.clear();
// console.log("--------Divide numbers as strings------------");


// function largeDiv(a, b) {
//     if (parseFloat(b) === 0) {
//         throw "error";
//     }
//     let left = parseFloat(a) % parseFloat(b);
//     const div = (parseFloat(a) / parseFloat(b));
//     if (!('' + div).includes('.')) {
//         return '' + div;
//     }
//     const int = `${Math.floor(div)}.`
//     let dec = '';
//     if (b.includes('.')) {
//         const mult = b.split('.')[1].length;
//         const aA = a * 10 ** mult;
//         const bB = b * 10 ** mult;
//         let left = parseFloat(aA) % parseFloat(bB);
//         for (let i = 0; i < 20; i++) {
//             dec += '' + Math.floor(left * 10 / parseFloat(bB));
//             left = (left * 10 % parseFloat(bB));
//             if (left === 0) {
//                 break;
//             }
//         }
//         return int + dec;
//     } if (!b.includes('.')) {
//         for (let i = 0; i < 20; i++) {
//             dec += '' + Math.floor(left * 10 / parseFloat(b));
//             left = (left * 10 % parseFloat(b));
//             if (left === 0) {
//                 break;
//             }
//         }
//     }
//     const result = int + dec;
//     if ('' + parseFloat(result) === '0') {
//         return '0';
//     }
//     if (result.includes('.') && result.endsWith('0')) {
//         return result.slice(0, result.length - 1);
//     }
//     return result;
// }
// console.log(largeDiv('22', '7'));
// console.log(largeDiv('6', '2'));
// console.log(largeDiv('5', '2'));
// console.log(largeDiv('13.25', '0.53'));
// console.log(largeDiv('1', '3'));
// console.log(largeDiv('1', '10000000000000000000000000'));
// console.log(largeDiv('0.5', '0.866025403'));
// console.log(largeDiv('6660526719100041897189702679189480466766', '888911074136762437942547110188')); //7492905548.02481161031029346327

console.clear();
console.log('-------------Simple decrypt algo-------------');

function decrypt(encryption) {
    const text = [...encryption];
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = '';
    for (let i = 0; i < abc.length; i++) {
        let len = text.filter(a => a === abc[i]);
        result += '' + len.length;
    }
    return result;
}

console.log(decrypt('$aaaa#bbb*ccfff!z'));

console.clear();
console.log('-------Only Duplicates-------');

function onlyDuplicates(str) {
    let result = str;
    const arr = str.split('');
    for (let i = 0; i < str.length; i++) {
        if ((arr.filter(a => a === arr[i])).length === 1) {
            result = result.replaceAll(arr[i], '')
        }
    }
    return result;
}


console.log(onlyDuplicates('abccdefee'));


console.clear();

function testit(s) {
    let sArr = s.split(' ');
    const text2 = 'abcdefghijklmnopqrstuvwxyz';
    const sS1 = s.replaceAll('?', '').split(' ');
    let array3 = [];
    for (let z = 0; z < sS1.length; z++) {
        const index1 = sS1[z].split('');
        array3.push([]);
        for (let i = 0; i < index1.length; i++) {
            for (let l = 0; l < text2.length; l++) {
                if (index1[i] === text2[l]) {
                    array3[z][i] = l;
                }
            }
        }
    }
    const sumArray3 = [];
    for (let k = 0; k < array3.length; k++) {
        sumArray3.push(array3[k].reduce((a1, b1) => a1 + b1, 0));
    }
    for (let p = 0; p < sArr.length; p++) {
        const sIndex = Math.floor(sumArray3[p] / (sArr[p].length - 1));
        sArr[p] = sArr[p].replace('?', text2[sIndex]);
    }
    console.log(sumArray3);
    return sArr.join(' ');
}

console.log(testit('y?u d?g')); //ywu deg
console.log(testit('hsfcr?i wspnfs?eu ?ozjrflxp b?i ?ly yrxwpsi?a naa?isx')); //hsfcrii wspnfsneu oozjrflxp bei rly yrxwpsija naakisx
console.log(testit('co?ewars')); //cokewars
console.log(testit('efz?kvki jp?a ?tq')); //efzlkvki jpga rtq

console.clear();
console.log('---------Simple Fun #97: Video Part---------------');


function videoPart(part, total) {
    const partArr = part.split(':');
    const totalArr = total.split(':');
    const partSec = parseInt(partArr[0]) * 3600 + parseInt(partArr[1]) * 60 + parseInt(partArr[2]);
    const totalSec = parseInt(totalArr[0]) * 3600 + parseInt(totalArr[1]) * 60 + parseInt(totalArr[2]);
    let result = [1, totalSec / partSec];
    if ((totalSec / partSec) % 1 !== 0) {
        for (let i = 1; i < Infinity; i++) {
            if ((totalSec / partSec) * i % 1 === 0) {
                result = [1 * i, (totalSec / partSec) * i];
                break;
            }
        }
    }
    return result;
}

console.log(videoPart("02:20:00", "07:00:00"));     // [1, 3])

console.log(videoPart("25:26:20", "25:26:20"));     // [1, 1])

console.log(videoPart("00:02:20", "00:10:00"));     // [7, 30])

console.log(videoPart("00:44:10", "03:34:16"));     // [1325, 6428])


console.clear();
console.log('------Clothes size number converter------------');


function sizeToNumber(size) {
    if (!size.endsWith('m') && !size.endsWith('l') && !size.endsWith('s')) {
        return null;
    }
    if (size === 'm') {
        return 38;
    }
    let sum = 0;
    for (let i = 0; i < size.length; i++) {
        if (size[i] === 'x') {
            sum++;
        }
    }
    if (sum === size.length - 1 && size.endsWith('l')) {
        return 40 + sum * 2;
    }
    if (sum === size.length - 1 && size.endsWith('s')) {
        return 36 - sum * 2;
    } else {
        return null;
    }
}

console.log(sizeToNumber("xxxs"));
console.log(sizeToNumber("s"));

