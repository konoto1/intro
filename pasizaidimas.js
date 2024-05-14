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
// ą -> a,
// ć -> c,
// ę -> e,
// ł -> l,
// ń -> n,
// ó -> o,
// ś -> s,
// ź -> z,
// ż -> z


// function correctPolishLetters1(string) {
//     const polisAbc = "ąćęłńóśźż";
//     const normalAbc = "acelnoszz";
//     for (let i = 0; i < string.length; i++) {
//         const letter = string[i];

//         //kur sedi ę polishAbc index 2
//         //kur sedi normalAbc e index 2
//         let index = -1;
//         for (let j = 0; j < polisAbc.length; j++) {
//             const polishletter = polisAbc[j];
//             if (polishletter === letter) {
//                 result += normalAbc[j];
//                 index = j;
//             }
//         }
//         if (index === -1) {
//             result += letter;
//         }
//     }
//     return result;
// }

// console.log(correctPolishLetters1("Wałęsa"));
// console.log(correctPolishLetters1("Jędrzęj Błądziński"));
// console.log(correctPolishLetters1("Lech Wałęsa"));
// console.log(correctPolishLetters1("Maria Skłodowska-Curie"));