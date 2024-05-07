console.log (true && true && true && true);
console.log (false && true && true && true);
console.log (false && false && true && true);
console.log (false && false && false && true);
console.log (false && false && false && false);
console.log (true && true && true && false);
console.log (true && true && false && false);
console.log (true && false && false && false);

console.clear();

console.log("-----1-----");

console.log (true || true || true || true);
console.log (false || true || true || true);
console.log (false || false || true || true);
console.log (false || false || false || true);
console.log (false || false || false || false);
console.log (true || true || true || false);
console.log (true || true || false || false);
console.log (true || false || false || false);

console.clear();

console.log("-------2-----");

console.log (true || true && true && true);
console.log (false || true && true && true);
console.log (false || false && true && true);
console.log (false || false && false && true);
console.log (false || false && false && false);
console.log (true || true && true && false);
console.log (true || true && false && false);
console.log (true || false && false && false);

console.clear();

console.log("----3---");

console.log (true && true || true && true);
console.log (false && true || true && true);
console.log (false && false || true && true);
console.log (false && false || false && true);
console.log (false && false || false && false);
console.log (true && true || true && false);
console.log (true && true || false && false);
console.log (true && false || false && false);

console.clear();

console.log("-----4----");

console.log (true && true && true || true);
console.log (false && true && true || true);
console.log (false && false && true || true);
console.log (false && false && false || true);
console.log (false && false && false || false);
console.log (true && true && true || false);
console.log (true && true && false || false);
console.log (true && false && false || false);

console.clear();

console.log ("-----5-----");

console.log (true || true || true && true);
console.log (false || true || true && true);
console.log (false || false || true && true);
console.log (false || false || false && true);
console.log (false || false || false && false);
console.log (true || true || true && false);
console.log (true || true || false && false);
console.log (true || false || false && false);

console.clear();

console.log ("-------6------");

console.log (true && true || true || true);
console.log (false && true || true || true);
console.log (false && false || true || true);
console.log (false && false || false || true);
console.log (false && false || false || false);
console.log (true && true || true || false);
console.log (true && true || false || false);
console.log (true && false || false || false);

console.clear();

console.log ("-------7------");

console.log (true || true && true || true);
console.log (false || true && true || true);
console.log (false || false && true || true);
console.log (false || false && false || true);
console.log (false || false && false || false);
console.log (true || true && true || false);
console.log (true || true && false || false);
console.log (true || false && false || false);

console.clear();

console.log ("----8-------");

console.log (true && false && true && true);
console.log (true && false && false && true);
console.log (true && true && false && true);
console.log (false && true && true && false);
console.log (false && false && true && false);
console.log (false && true && false && false);

console.clear();

console.log (true || false && true && true);
console.log (true || false && false && true);
console.log (true || true && false && true);
console.log (false || true && true && false);
console.log (false || false && true && false);
console.log (false || true && false && false);

console.clear();

console.log (true || false || true && true);
console.log (true || false || false && true);
console.log (true || true || false && true);
console.log (false || true || true && false);
console.log (false || false || true && false);
console.log (false || true || false && false);

console.clear();

console.log (true || false || true || true);
console.log (true || false || false || true);
console.log (true || true || false || true);
console.log (false || true || true || false);
console.log (false || false || true || false);
console.log (false || true || false || false);

console.clear();

console.log (true && false && true || true);
console.log (true && false && false || true);
console.log (true && true && false || true);
console.log (false && true && true || false);
console.log (false && false && true || false);
console.log (false && true && false || false);

console.clear();

console.log (true && false || true || true);
console.log (true && false || false || true);
console.log (true && true || false || true);
console.log (false && true || true || false);
console.log (false && false || true || false);
console.log (false && true || false || false);

console.clear();

console.log (true && false || true && true);
console.log (true && false || false && true);
console.log (true && true || false && true);
console.log (false && true || true && false);
console.log (false && false || true && false);
console.log (false && true || false && false);

console.clear();

console.log (true || false && true || true);
console.log (true || false && false || true);
console.log (true || true && false || true);
console.log (false || true && true || false);
console.log (false || false && true || false);
console.log (false || true && false || false);

console.clear();

console.log (true || false || true || false);
console.log (false || true || false || true);
console.log (true || false && true && false);
console.log (false || true && false && true);
console.log (true || false || true && false);
console.log (false || true || false && true);

console.clear();

console.log (true && false && true && false);
console.log (false && true && false && true);
console.log (true && false || true || false);
console.log (false && true || false || true);
console.log (true && false && true || false);
console.log (false && true && false || true);

console.clear();

console.log (true && false || true && false);
console.log (false && true || false && true);
console.log (true || false && true || false);
console.log (false || true && false || true);

console.clear();

function compareBMI1 (){
    const weightJohn = 92;
    const heightJohn = 1.95;
    const weightMark = 78;
    const heightMark = 1.69;
    const bmiJohn = weightJohn / heightJohn ** 2;
    const bmiMark = weightMark / heightMark ** 2;
    const markHigherBMI = bmiMark > bmiJohn;

return "Mark has a higher BMI than John: " + "'" + markHigherBMI + "'";
}
console.log (compareBMI1());



function compareBMI2 (wJ,hJ,wM,hM){
    const weightJohn = wJ;
    const heightJohn = hJ;
    const weightMark = wM;
    const heightMark = hM;
    const bmiJohn = wJ / hJ ** 2;
    const bmiMark = wM / hM ** 2;
    const markHigherBMI = bmiMark > bmiJohn;

return "Mark has a higher BMI than John: " + "'" + markHigherBMI + "'";
}
console.log (compareBMI2(85, 1.76, 95, 1.88));



function compareBMI3 (wJ,hJ,wM,hM){
    const weightJohn = wJ;
    const heightJohn = hJ;
    const weightMark = wM;
    const heightMark = hM;
    const bmiJohn = wJ / hJ ** 2;
    const bmiMark = wM / hM ** 2;
        if (bmiMark > bmiJohn){
        return "Mark's BMI " + "(" + bmiMark.toFixed(1) + ")" + " is higher than John's" + "(" + bmiJohn.toFixed(1) + ")" + "!";
        } else  {
            return "John's BMI " + "(" + bmiJohn.toFixed(1) + ")" + " is higher than Mark's" + "(" + bmiMark.toFixed(1) + ")" + "!";
        }
}

console.log (compareBMI3(92, 1.95, 78, 1.69));

console.clear();

function compareBMI3 (wJ,hJ,wM,hM){
    const weightJohn = wJ;
    const heightJohn = hJ;
    const weightMark = wM;
    const heightMark = hM;
    const bmiJohn = wJ / hJ ** 2;
    const bmiMark = wM / hM ** 2;
        if (bmiMark > bmiJohn){
        return `Mark's BMI ${bmiMark.toFixed(1)} is higher than John's ${bmiJohn.toFixed(1)}!`;
        } else  {
            return `John's BMI ${bmiJohn.toFixed(1)} is higher than Mark's ${bmiMark.toFixed(1)}!`;
        }
}

console.log (compareBMI3(92, 1.95, 78, 1.69));


console.log("------Namu darbas-----");
console.log("-----Kintamuju inicijavimas-----");
console.log("------Pirma uzduotis------");

const a = 1;
console.log(a);

const b = 2;
console.log(b);

const c = 3;
console.log(c);

console.log ("------Antra uzduotis-------");

const name1 = "Tomas";
console.log(name1);

const name2 = "Jonas";
console.log(name2); 

const name3 = "Petras";
console.log(name3); 

console.log ("-------Trecia uzduotis------");

const grade1 = [1, 2, 3, 4, 5];
console.log(grade1);

const grade2 = [10, 20, 30, 40, 50];
console.log(grade2);

const grade3 = [5, 10, 15, 20, 25];
console.log(grade3);

console.log ("-------Ketvirta uzduotis------");

let text1 = ["Vienas", "Du", "Trys", "Keturi", "Penki"];
console.log(text1);

const text2 = ["Desimt", "Dvidesimt", "Trisdesimt", "Keturiasdesimt", "Penkiasdesimt"];
console.log(text2);

const text3 = ["Penki", "Desimt", "Penkiolika", "Dvidesimt", "Dvidesimt penki"];
console.log(text3);

console.log ("-------Veiksmai su kintamaisiais------");
console.log ("------Pirma uzduotis------");

const sum = a + b + c;
console.log(sum);

console.log ("------Antra uzduotis------");

const names = name1 + " " + name2 + " " + name3;
console.log(names);

console.log ("-------Trecia uzduotis------");
console.log ("-----a-------");

const sumEvenGrade1 = grade1[0] + grade1[2] + grade1[4];
const sumOddGrade1 =  grade1[1] + grade1[3];
const diffrenceGrade1 = sumEvenGrade1 - sumOddGrade1;

const sumEvenGrade2 = grade2[0] + grade2[2] + grade2[4];
const sumOddGrade2 =  grade2[1] + grade2[3];
const diffrenceGrade2 = sumEvenGrade2 - sumOddGrade2;

const sumEvenGrade3 = grade3[0] + grade3[2] + grade3[4];
const sumOddGrade3 =  grade3[1] + grade3[3];
const diffrenceGrade3 = sumEvenGrade3 - sumOddGrade3;

console.log ("-------b-----");

console.log (diffrenceGrade1);
console.log (diffrenceGrade2);
console.log (diffrenceGrade3);

console.log ("------Ketvirta uzduotis-------");

 //const sumText = text3[4] + ", " + text3[3] + ", " + text3[2] + ", " + text3[1] + ", " + text3[0] + ", " + text2[4] + ", " + text2[3] + ", " + text2[2] + ", " + text2[1] + ", " + text2[0] + ", " + text1[4] + ", " + text1[3] + ", " + text1[2] + ", " + text1[1] + ", " + text1[0];
text1.reverse();
text2.reverse();
text3.reverse();

const sumText1 = text3.join(", ") + ", " + text2.join(", ") + ", " + text1.join(", ")
console.log(sumText1);



console.log ("------Kintamuju palyginimas-----");
console.log ("------Pirma uzduotis-----");

console.log ("-----a------");

 const x = 10;
 const y = 20;

 if (x > y) {
 console.log("Pomidoras");
 } else {
    console.log("Bandykite kita karta.");
  }
 
  console.log ("----b------");

  if (x < y) {
 console.log("Pomidoras");
 } else {
    console.log("Bandykite kita karta.");
  }
 
  console.log ("----c------");

  if (x === y) {
 console.log("Pomidoras");
 } else {
    console.log("Bandykite kita karta.");
  }
 
  console.log ("----d------");

  if (x !== y) {
 console.log("Pomidoras");
 } else {
    console.log("Bandykite kita karta.");
  }
  
  console.log ("----e------");
  
  if (x >= y) {
 console.log("Pomidoras");
 } else {
    console.log("Bandykite kita karta.");
  }
 
  console.log ("----f------");

  if (x <= y) {
 console.log("Pomidoras");
 } else {
    console.log("Bandykite kita karta.");
  }
 
console.log ("Antras uzdavinys");

const d = "Vardas";
const e = "Pavarde";

console.log (d.length);
console.log (e.length);
console.log ("Trecias uzdavinys");

console.log ("----a------");

if (d.length > e.length) {
    console.log ("Pomidoras");
}else {
    console.log("Bandykite kita karta.")
}

console.log ("----b------");

if (d.length < e.length) {
    console.log ("Pomidoras");
}else {
    console.log("Bandykite kita karta.")
}

console.log ("----c------");

if (d.length === e.length) {
    console.log ("Pomidoras");
}else {
    console.log("Bandykite kita karta.")
}

console.log ("----d------");

if (d.length !== e.length) {
    console.log ("Pomidoras");
}else {
    console.log("Bandykite kita karta.")
}
console.log ("----e------");

if (d.length >= e.length) {
    console.log ("Pomidoras");
}else {
    console.log("Bandykite kita karta.")
}

console.log ("----f------");

if (d.length <= e.length) {
    console.log ("Pomidoras");
}else {
    console.log("Bandykite kita karta.")
}

console.log ("Ketvirta uzduotis");

const grade = [10, 8, 5, 10, 9];
const value = [100, 52, 34, 95, 27];
 console.log (grade.length);
 console.log (value.length);

console.log ("Penkta uzduotis");
console.log ("----a------");

 if (grade.length > value.length){
    console.log("Pomidoras");
 } else {
    console.log("Bandykite kita kart.");
 }

 console.log ("----b------");

 if (grade.length < value.length){
    console.log("Pomidoras");
 } else {
    console.log("Bandykite kita kart.");
 }

 console.log ("----c------");

 if (grade.length === value.length){
    console.log("Pomidoras");
 } else {
    console.log("Bandykite kita kart.");
 }

 console.log ("----d------");

 if (grade.length !== value.length){
    console.log("Pomidoras");
 } else {
    console.log("Bandykite kita kart.");
 }

 console.log ("----e------");
 
 if (grade.length >= value.length){
    console.log("Pomidoras");
} else {
   console.log("Bandykite kita kart.");
}

console.log ("----f------");

if (grade.length <= value.length){
    console.log("Pomidoras");
 } else {
    console.log("Bandykite kita kart.");
 }






