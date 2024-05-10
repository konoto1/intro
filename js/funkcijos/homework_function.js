console.log("-----Funkcijos-----\n-------Pirmas uzdavinys------");

function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());


console.log("---------Antras uzdavinys------");
/*
-   jeigu, pirmas parametras nera sakicius
    -   graziname kalidos pranesima
-   jeigu antras parametras nera sakicius
    -   graziname klaidos pranesima
-   Atskirame kintamajame issisaugojame kintamojo reiksme
-   Graziname sandaugos reiksme

*/
function daugyba(skaicius1, skaicius2) {
    if (typeof (skaicius1) !== "number") {
        return "pirmas parametras turi buti skaiciaus tipo";
    }
    if (typeof (skaicius2) !== "number") {
        return "antras parametras turi buti skaiciaus tipo";
    }
    const sandauga = skaicius1 * skaicius2;
    return sandauga;
}


console.log(daugyba("a", "a"));
console.log(daugyba(10, 20));
console.log(daugyba(-3, Infinity));
console.log(daugyba(-3, NaN));
console.log(daugyba(-3, [0]));


console.log("---------Trecias uzdavinys--------");


function skaitmenuKiekisSkaiciuje(skaicius) {
    if (typeof skaicius !== "number") {
        return ("Pateikta netinkamo tipo reikšmė.");
    }
    if ("" + skaicius === "NaN") {
        return ("Pateikta netinkamo tipo reikšmė.");
    }
    if ("" + skaicius === "Infinity") {
        return ("Pateikta netinkamo tipo reikšmė.");
    }
    if ("" + skaicius === "-Infinity") {
        return ("Pateikta netinkamo tipo reikšmė.");
    }
    const skaiciusAsText = ("" + skaicius).length;
    return skaiciusAsText;
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));


console.log("\n---------------Ketvirta uzduotis------------\n");


function didziausiasSkaiciusSarase(n) {
    if (Array.isArray(n) !== true) {
        return "Pateikta netinkamo tipo reikšmė.";
    }
    if (n.length === 0) {
        return "Pateiktas sąrašas negali būti tuščias.";
    }
    for (let i = 0; i < n.length; i++) {
        if (typeof (n[i]) === "string")
            return "Pateikto sąrašo reikšmės turi būti skaičiai.";
    }

    let hV = n[0];

    for (let i = 0; i < n.length; i++) {
        if (n[i] > hV) {
            hV = n[i];
        }
    }
    return hV;
}



console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase("pomidoras"));
console.log(didziausiasSkaiciusSarase([]));
console.log(didziausiasSkaiciusSarase(["a", "bb", "ea", "eb"]));


console.log("\n--------------Penkta uzduotis-----------------\n");



function isrinktiRaides(text, step) {
    if (typeof (text) !== "string") {
        return "Pirmasis kintamasis yra netinkamo tipo.";
    }
    if (0 === text.length > 100) {
        return "Pirmojo kintamojo reikšmė yra netinkamo dydžio.";
    }
    if (typeof (step) !== "number") {
        return "Antrasis kintamasis yra netinkamo tipo.";
    }
    if ("" + step === "NaN") {
        return "Antrasis kintamasis negali būti NaN.";
    }
    for (let i = 0; i < ("" + step).length; i++) {
        if (("" + step)[i] === ".")
            return "Antrasis kintamasis turi būti sveikasis skaičius.";
    }
    if (step <= 0) {
        return "Antrasis kintamasis turi būti didesnis už nulį.";
    }
    if (step > text.length) {
        return "Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.";
    }
    let newText = "";
    for (let i = step - 1; i < text.length; i += step) {
        newText += text[i];
    }
    return newText;
}


console.log(isrinktiRaides("abcdefg", 2));
console.log(isrinktiRaides("abcdefghijkl", 3));
console.log(isrinktiRaides("abc", 0));
console.log(isrinktiRaides("abc", 4));
console.log(isrinktiRaides(1561, 2));
console.log(isrinktiRaides("aasasasas", NaN));
console.log(isrinktiRaides("aasasasas", 1.5));
console.log(isrinktiRaides("aasasasas", undefined));


console.log("\n--------------Sesta uzduotis------------\n");


function dalyba(n1, n2) {
    if (typeof (n1) !== "number") {
        return "Pirmasis kintamasis privalo būti skaičius";
    }
    if (typeof (n2) !== "number") {
        return "Antrasis kintamasis privalo būti skaičius";
    }
    if ("" + n1 === "NaN") {
        return "Pirmasis kintamasis negali būti NaN";
    }
    if ("" + n2 === "NaN") {
        return "Antrasis kintamasis negali būti NaN";
    }
    if ("" + n1 === "Infinity") {
        return "Pirmasis kintamasis negali būti Infinity";
    }
    if ("" + n2 === "Infinity") {
        return "Antrasis kintamasis negali būti Infinity";
    }
    if ("" + n1 === "-Infinity") {
        return "Pirmasis kintamasis negali būti Infinity";
    }
    if ("" + n2 === "-Infinity") {
        return "Antrasis kintamasis negali būti -Infinity";
    }
    //if (n2 === 0) {
    //    return "Dalyba iš nulio negalima";
    //}
    let answer = n1 / n2;
    return answer;

}


console.log("Testas1   >>>  " + dalyba("a", 2));
console.log("Testas2   >>>  " + dalyba(2, "2"));
console.log("Testas3   >>>  " + dalyba(2, 0));         //?????
console.log("Testas4   >>>  " + dalyba(2, -Infinity));
console.log("Testas5   >>>  " + dalyba(2, undefined));
console.log("Testas6   >>>  " + dalyba(2, NaN));
console.log("Testas7   >>>  " + dalyba(NaN, null));
console.log("Testas8   >>>  " + dalyba([5], null));
console.log("Testas9   >>>  " + dalyba(-10, 2));
console.log("Testas10  >>>  " + dalyba(0, -10));




