console.log("-----Funkcijos-----\n-------Pirmas uzdavinys------");

function tusciaFunkcija() {
    return false;
}

console.log(tusciaFunkcija());


console.log("---------Antras uzdavinys------");

function daugyba(skaicius1, skaicius2) {
    let sandauga = skaicius1 * skaicius2;
    return sandauga;
}

console.log(daugyba(5, 6));
console.log(daugyba(10, 20));
console.log(daugyba(-3, 75));


console.log("---------Trecias uzdavinys--------");


function skaitmenuKiekisSkaiciuje(skaicius) {
    if (typeof ((skaicius)) !== typeof (1)) {
        console.log("Pateikta netinkamo tipo reikšmė.");
    } else {
        console.log((skaicius).toString().length);
    }
}

console.log(skaitmenuKiekisSkaiciuje(0));
//console.log(skaitmenuKiekisSkaiciuje(781));
//console.log(skaitmenuKiekisSkaiciuje(37060123456));
//console.log(skaitmenuKiekisSkaiciuje(true));
//console.log(skaitmenuKiekisSkaiciuje("asd"));
//console.log(skaitmenuKiekisSkaiciuje(NaN));



