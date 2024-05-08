

console.log("-------Ciklo for panaudojias-----");
console.log("----------Pirmas uzdavinys------");
console.log("----------a----------");




let sum = 0;
for (let i = 0; i <= 0; i++) {
    sum += i;
}
console.log(sum);

console.log("----------b----------");

let sum1 = 0;
for (let i = 0; i <= 4; i++) {
    sum1 += i;
}
console.log(sum1);




console.log("----------c----------");

let sum2 = 0;
for (let i = 0; i <= 100; i++) {
    sum2 += i;
}
console.log(sum2);

console.log("----------d----------");

let sum3 = 0;
for (let i = 574; i <= 815; i++) {
    sum3 += i;
}
console.log(sum3);

console.log("----------e----------");

let sum4 = 0;
for (let i = -50; i <= 50; i++) {
    sum4 += i;
}
console.log(sum4);

console.log("----------f----------");

let sum5 = 0;
for (let i = -70; i <= 30; i++) {
    sum5 += i;
}
console.log(sum5);

console.log("---------Antra uzduotis--------");




const text = "alus";
let text1 = "";
for (let i = 0; i < text.length; i++) {
    text1 += text[text.length - 1 - i];
    //for (let i = 0; i < text.length; i++) {text1 += text[i] + text1;
}
console.log(text1);

console.log("---------Trecia uzduotis---------");
console.log("---------a-----------");


let aDiv3 = 0;
let aDiv5 = 0;
let aDiv7 = 0;
for (let i = 0; i <= 11; i++) {
    if (i % 3 === 0) {
        aDiv3++;
    }
    if (i % 5 === 0) {
        aDiv5++;
    }
    if (i % 7 === 0) {
        aDiv7++;
    }
}

console.log("Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra " + aDiv3 + " vienetai.");
console.log("Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra " + aDiv5 + " vienetai.");
console.log("Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra " + aDiv7 + " vienetai.");

console.log("-----------b-----------");

let bDiv3 = 0;
let bDiv5 = 0;
let bDiv7 = 0;
for (let i = 8; i <= 31; i++) {
    if (i % 3 === 0) {
        bDiv3++;
    }
    if (i % 5 === 0) {
        bDiv5++;
    }
    if (i % 7 === 0) {
        bDiv7++;
    }
}

console.log("Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 3 yra " + bDiv3 + " vienetai.");
console.log("Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 5 yra " + bDiv5 + " vienetai.");
console.log("Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 7 yra " + bDiv7 + " vienetai.");

console.log("-----------c-----------");

let cDiv3 = 0;
let cDiv5 = 0;
let cDiv7 = 0;
for (let i = -18; i <= 18; i++) {
    if (i % 3 === 0) {
        cDiv3++;
    }
    if (i % 5 === 0) {
        cDiv5++;
    }
    if (i % 7 === 0) {
        cDiv7++;
    }
}

console.log("Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 3 yra " + cDiv3 + " vienetu.");
console.log("Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 5 yra " + cDiv5 + " vienetai.");
console.log("Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 7 yra " + cDiv7 + " vienetai.");


console.log("\n---------Patobulinimas----------\n----------Pirma uzduotis-------");


const a = [0, 0];
const b = [0, 4];
const c = [0, 100];
const d = [574, 815];
const e = [-50, 50];
const f = [-70, 30];

function suma1(marks) {
    let sum5 = 0;
    for (let i = marks[0]; i <= marks[1]; i++) {
        sum5 += i;
    }
    return sum5;
}

console.log(suma1(a));
console.log(suma1(b));
console.log(suma1(c));
console.log(suma1(d));
console.log(suma1(e));
console.log(suma1(f));



console.log("----------Trecia uzduotis-----------");



const a1 = [0, 11];
const b1 = [8, 31];
const c1 = [-18, 18];

function number(digits) {
    let divideBy3 = 0;
    let divideBy5 = 0;
    let divideBy7 = 0;
    for (let i = digits[0]; i <= digits[1]; i++) {
        if (i % 3 === 0) {
            divideBy3++;
        }
        if (i % 5 === 0) {
            divideBy5++;
        }
        if (i % 7 === 0) {
            divideBy7++;
        }
    }
    return ("Skaičių intervale tarp " + digits[0] + " ir " + digits[1] + " besidalijančių be liekanos iš 3 yra " + divideBy3 + " vienetai." + "\nSkaičių intervale tarp " + digits[0] + " ir " + digits[1] + " besidalijančių be liekanos iš 5 yra " + divideBy5 + " vienetai." + "\nSkaičių intervale tarp " + digits[0] + " ir " + digits[1] + " besidalijančių be liekanos iš 7 yra " + divideBy7 + " vienetai.");
}

console.log(number(a1) + "\n----------");
console.log(number(b1) + "\n----------");
console.log(number(c1));



console.log("-------dar vienas variantas-----\n-------Pirma uzduotis-----");


function suma(start, finish) {
    let sum = 0;
    for (let i = start; i <= finish; i++) {
        sum += i;
    }
    return sum;
}
console.log(suma(0, 0));
console.log(suma(0, 4));
console.log(suma(0, 100));
console.log(suma(574, 815));
console.log(suma(-50, 50));
console.log(suma(-70, 30));


console.log("----------Trecia uzduotis----------");

function numberCount(start, finish, step) {
    let answer = 0;
    for (let i = start; i <= finish; i++) {
        if (i % step === 0) {
            answer++;
        }
    }
    return "Skaičių intervale tarp " + start + " ir " + finish + ", besidalijančių be liekanos iš " + step + " yra " + answer + " vienetai.";
}

console.log(numberCount(0, 11, 3));
console.log(numberCount(0, 11, 5));
console.log(numberCount(0, 11, 7));

console.log(numberCount(8, 31, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(8, 31, 7));

console.log(numberCount(-18, 18, 3));
console.log(numberCount(-18, 18, 5));
console.log(numberCount(-18, 18, 7));

