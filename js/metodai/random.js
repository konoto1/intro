// [0...1)

console.log(Math.random());
function moneta() {
    if (Math.random() < 0.5) {
        // [0..0.5)
        return ('Skaicius');
    } else {
        // [0.5..1)
        return ('Herbas');
    }
}

const metimuKiekis = 8
let herbai = 0;
for (let i = 0; i < metimuKiekis; i++) {
    const iskrito = moneta();
    if (iskrito === 'Herbas') {
        herbai++;
    }
    //console.log(iskrito);
}

console.log('HERBU KIEKIS:', herbai);
console.log('SKAICIU KIEKIS:', metimuKiekis - herbai);

const week = ['Pirm', 'Antr', 'Trec', 'Ketv', 'Penkt', 'Sest', 'Sekm'];
const step = 1 / 7;
const bandymai = 10;
for (let i = 0; i < bandymai; i++) {
    const index = Math.floor(Math.random() * week.length)
    console.log(week[index]);
}

// man reikia atsitiktinio skaiciaus intervale nuo 1 iki 10 imtinai
const skaiciai = Math.floor((Math.random() * 10 + 1));
console.log(skaiciai);

// ND man reikia atsitiktinio skaiciaus intervale nuo 23 iki 617 imtinai
console.log(617 - 23);
const skaiciai1 = Math.floor((Math.random() * 595 + 23));
console.log(skaiciai1);