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
        console.log(Array.isArray(n));
        return "Pateikta netinkamo tipo reikšmė.";
    }
    if (n.length === 0) {
        return "Pateiktas sąrašas negali būti tuščias.";
    }

    let hV = n[0];

    for (let i = 0; i < n.length; i++) {
        if (n[i] > hV) {
            hV = n[i];
        }
    }
    return hV;
}




//Funkcija pavadinimu “didziausiasSkaiciusSarase”:
//priima vieną kintamąjį
//jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
//jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
//priešingu atveju, funkcija tęsia darbą
//pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
//gražina didžiausią surastą skaičių
//TESTAI:
console.log(didziausiasSkaiciusSarase([1]));
//rezultatas: 1
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
//rezultatas: 3
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
//rezultatas: 78
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
//rezultatas: 69
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
//rezultatas: -1
console.log(didziausiasSkaiciusSarase("pomidoras"));
//rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log(didziausiasSkaiciusSarase([]));
//rezultatas: “Pateiktas sąrašas negali būti tuščias.”
console.log(didziausiasSkaiciusSarase(["a", "b", "ea", "eb"]));

