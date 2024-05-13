/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
*/

console.log("Number.isFinite()\n");

console.log(Number.isFinite(1235664));
console.log(Number.isFinite(-1235664));
console.log(Number.isFinite(12356.64));
console.log(Number.isFinite(0));
console.log(Number.isFinite(-1235.664));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));

console.log("-----------------");
console.log(".isFinite()\n");

console.log(isFinite(1235664));
console.log(isFinite(-1235664));
console.log(isFinite(12356.64));
console.log(isFinite(0));
console.log(isFinite(-1235.664));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(NaN));

console.log("-----------------");
console.log(".NaN\n");

console.log(isNaN(1235664));
console.log(isNaN(-1235664));
console.log(isNaN(12356.64));
console.log(isNaN(0));
console.log(isNaN(-1235.664));
console.log(isNaN(Infinity));
console.log(isNaN(-Infinity));
console.log(isNaN(NaN));

console.log("-----------------");
console.log(".parseInt\n");

console.log(parseInt("87"));
console.log(parseInt("-87"));
console.log(parseInt("0"));
console.log(parseInt("3.14"));
console.log(parseInt("-3.14"));
console.log(parseInt("NaN"));
console.log(parseInt("Infinity"));
console.log(parseInt("-Infinity"));
console.log(parseInt("-Infinity"));
console.log(parseInt("Grybu karas"));
console.log(parseInt("123abc"));
console.log(parseInt("abc123"));
console.log(parseInt("123abc123abc"));
console.log(parseInt("abc123abc123"));

//parseInt dirba iki pirmos klaidos (kol sutinka neskaiciu)


console.log("-----------------");
console.log(".parseFloat\n");

console.log(parseFloat("87"));
console.log(parseFloat("-87"));
console.log(parseFloat("0"));
console.log(parseFloat("3.14"));
console.log(parseFloat("-3.14"));
console.log(parseFloat("NaN"));
console.log(parseFloat("Infinity"));
console.log(parseFloat("-Infinity"));
console.log(parseFloat("-Infinity"));
console.log(parseFloat("Grybu karas"));
console.log(parseFloat("123abc"));
console.log(parseFloat("abc123"));
console.log(parseFloat("123abc123abc"));
console.log(parseFloat("abc123abc123"));
console.log(parseFloat("1.2525e-5"));
console.log(parseFloat("1.2525e5"));


console.log("-----------------");
console.log(".toFixed())\n");

const c = 5.125;
// 5.00

console.log(5);
console.log(c.toFixed(2));
console.log((5).toFixed(2));
console.log((5.12589).toFixed(20));
console.log(parseFloat(c.toFixed(2)));
