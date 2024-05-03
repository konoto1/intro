console.log (true && true && true && true);
console.log (false && true && true && true);
console.log (false && false && true && true);
console.log (false && false && false && true);
console.log (false && false && false && false);
console.log (true && true && true && false);
console.log (true && true && false && false);
console.log (true && false && false && false);

console.clear ();

console.log("-----1-----");

console.log (true || true || true || true);
console.log (false || true || true || true);
console.log (false || false || true || true);
console.log (false || false || false || true);
console.log (false || false || false || false);
console.log (true || true || true || false);
console.log (true || true || false || false);
console.log (true || false || false || false);

console.clear ();

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

console.clear ();

console.log("-----4----");

console.log (true && true && true || true);
console.log (false && true && true || true);
console.log (false && false && true || true);
console.log (false && false && false || true);
console.log (false && false && false || false);
console.log (true && true && true || false);
console.log (true && true && false || false);
console.log (true && false && false || false);

console.clear ();

console.log ("-----5-----");

console.log (true || true || true && true);
console.log (false || true || true && true);
console.log (false || false || true && true);
console.log (false || false || false && true);
console.log (false || false || false && false);
console.log (true || true || true && false);
console.log (true || true || false && false);
console.log (true || false || false && false);

console.clear ();

console.log ("-------6------");

console.log (true && true || true || true);
console.log (false && true || true || true);
console.log (false && false || true || true);
console.log (false && false || false || true);
console.log (false && false || false || false);
console.log (true && true || true || false);
console.log (true && true || false || false);
console.log (true && false || false || false);

console.clear ();

console.log ("-------7------");

console.log (true || true && true || true);
console.log (false || true && true || true);
console.log (false || false && true || true);
console.log (false || false && false || true);
console.log (false || false && false || false);
console.log (true || true && true || false);
console.log (true || true && false || false);
console.log (true || false && false || false);

console.clear ();

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

console.log (compareBMI3(85, 1.76, 95, 1.88));


