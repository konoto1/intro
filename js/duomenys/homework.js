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


// Namu darbas 
// Kintamuju inicijavimas
// Pirma uzduotis:

const a = 1;
console.log(a);

const b = 2;
console.log(b);

const c = 3;
console.log(c);

//Antra uzduotis

const name1 = "Tomas";
console.log(name1);

const name2 = "Jonas";
console.log(name2); 

const name3 = "Petras";
console.log(name3); 

// Trecia uzduotis

const grade1 = [1, 2, 3, 4, 5];
console.log(grade1);

const grade2 = [10, 20, 30, 40, 50];
console.log(grade2);

const grade3 = [5, 10, 15, 20, 25];
console.log(grade3);

//Ketvirta uzduotis

const text1 = ["Vienas", "Du", "Trys", "Keturi", "Penki"];
console.log(text1);

const text2 = ["Desimt", "Dvidesimt", "Trisdesimt", "Keturiasdesimt", "Penkiasdesimt"];
console.log(text2);

const text3 = ["Penki", "Desimt", "Penkiolika", "Dvidesimt", "Dvidesimt penki"];
console.log(text3);

// Veiksmai su kintamaisiais
// Pirma uzduotis

const sum = a + b + c;
console.log(sum);

// Antra uzduotis

const names = name1 + " " + name2 + " " + name3;
console.log(names);

// Trecia uzduotis
//a

////????

// Ketvirta uzduotis

 const sumText = text3[4] + ", " + text3[3] + ", " + text3[2] + ", " + text3[1] + ", " + text3[0] + ", " + text2[4] + ", " + text2[3] + ", " + text2[2] + ", " + text2[1] + ", " + text2[0] + ", " + text1[4] + ", " + text1[3] + ", " + text1[2] + ", " + text1[1] + ", " + text1[0];


 // Kintamuju palyginimas
 // Pirma uzduotis

 //a

 const x = 10;
 const y = 20;

 if (x > y) {
 console.log("Pomidoras");
 } else {
    console.log("Bandykite kita karta.");
  }
 
//b

  if (x < y) {
 console.log("Pomidoras");
 } else {
    console.log("Bandykite kita karta.");
  }
 
  //c

  if (x === y) {
 console.log("Pomidoras");
 } else {
    console.log("Bandykite kita karta.");
  }
 
 //d

  if (x !== y) {
 console.log("Pomidoras");
 } else {
    console.log("Bandykite kita karta.");
  }
  
  //e
  
  if (x >= y) {
 console.log("Pomidoras");
 } else {
    console.log("Bandykite kita karta.");
  }
 
//f

  if (x <= y) {
 console.log("Pomidoras");
 } else {
    console.log("Bandykite kita karta.");
  }
 
// Antras uzdavinys

const d = "Vardas";
const e = "Pavarde";

console.log (d.length);
console.log (e.length);

// Trecias uzdavinys

//a

if (d.length > e.length) {
    console.log ("Pomidoras");
}else {
    console.log("Bandykite kita karta.")
}

//b

if (d.length < e.length) {
    console.log ("Pomidoras");
}else {
    console.log("Bandykite kita karta.")
}

//c

if (d.length === e.length) {
    console.log ("Pomidoras");
}else {
    console.log("Bandykite kita karta.")
}

//d

if (d.length !== e.length) {
    console.log ("Pomidoras");
}else {
    console.log("Bandykite kita karta.")
}

//e

if (d.length >= e.length) {
    console.log ("Pomidoras");
}else {
    console.log("Bandykite kita karta.")
}

//f

if (d.length <= e.length) {
    console.log ("Pomidoras");
}else {
    console.log("Bandykite kita karta.")
}

//Ketvirta uzduotis

const grade = [10, 8, 5, 10, 9];
const value = [100, 52, 34, 95, 27];
 console.log (grade.length);
 console.log (value.length);

 //Penkta uzduotis
 //a

 if (grade.length > value.length){
    console.log("Pomidoras");
 } else {
    console.log("Bandykite kita kart.");
 }

 //b

 if (grade.length < value.length){
    console.log("Pomidoras");
 } else {
    console.log("Bandykite kita kart.");
 }

 //c

 if (grade.length === value.length){
    console.log("Pomidoras");
 } else {
    console.log("Bandykite kita kart.");
 }

 //d

 if (grade.length !== value.length){
    console.log("Pomidoras");
 } else {
    console.log("Bandykite kita kart.");
 }

 //e 
 
 if (grade.length >= value.length){
    console.log("Pomidoras");
} else {
   console.log("Bandykite kita kart.");
}

//f

if (grade.length <= value.length){
    console.log("Pomidoras");
 } else {
    console.log("Bandykite kita kart.");
 }