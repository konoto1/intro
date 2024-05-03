/*
FUNCTION - funkcija, perpanaudojima logika
() - parametru blokas
{} - logikos blokas

input => Function() => Output
*/

function funkcijosPavadinimas() {
}

const a  = funkcijosPavadinimas();

console.log (a);

function empty () {
    return undefined;
}

console.log (empty());

function giveMeFive (){
    return 5;
}
console.log(giveMeFive());

/*
Input:
name: Jonas
surname: Jonaitis

Output:
Laba diena, as esu Jonas Jonaitis!
*/
function intro (name, lastname, age){
    return "Laba diena, as esu " + name + " " + lastname + " mano amzius yra " + age + "!";
}

console.log (intro("Jonas", "Jonaitis", 30));
console.log (intro("Maryte", "Marytaite", 20));
console.log (intro("Ona", "Onaityte", 25));

console.clear();



/*
Input:
-   Pirmas skaicius = 5
-   Antras skaicius = 7

Output:
35
*/

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}

console.log (multiply(10, 20));
console.log (multiply(5, 8));
console.log (multiply(-6, 15));
console.log ("-------");


// Mano vardas yra Jonas, man 99 metai ir as megstu cepelinus
// Mano vardas yra Maryte, man 88 metai ir as megstu balionus

function iLike (name, age, like){
    return "Mano vardas yra " + name + " man " + age + " metai ir as megstu " + like + ".";
}

console.log (iLike("Jonas", 99, "cepelinus"));
console.log (iLike("Maryte", 88, "balionus"));

console.log("---------------------");

function price (value1){
    const pvm = 21;
    const priceForSale = value1 * (1 + pvm/100);
    const pvmPrice = value1 * 0.21;
    return "Price: " + value1 + "Eur\n" +  "PVM: " +
    pvmPrice + "Eur\n" + "Total: " + priceForSale + "Eur\n" + "Have a nice day!";

 }
console.log (price(5));







