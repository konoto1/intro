const diena = 8;

if (diena === 1) {
    console.log('Pirmadienis');
} else if (diena === 2) {
    console.log('Antradienis');
} else if (diena === 3) {
    console.log('Treciadienis');
} else if (diena === 4) {
    console.log('Ketvirtadienis');
} else if (diena === 5) {
    console.log('Penktadienis');
} else if (diena === 6) {
    console.log('Sestadienis');
} else if (diena === 7) {
    console.log('Sekmadienis');
} else {
    console.log('Error');
}

console.clear();

const day = 9;
switch (day) {
    case 1:
        console.log('pirm');
        break;
    case 2:
        console.log('antr');
        break;
    case 3:
        console.log('trec');
        break;
    case 4:
        console.log('ketv');
        break;
    case 5:
        console.log('penkt');
        break;
    case 6:
        console.log('sest');
        break;
    case 7:
        console.log('sekm');
        break;
    default:
        console.log('Error');
        break;
}

// autobusas --> marsrutas --> a-->b; b-->a.

const stop = 'Z.Tiltas1';

switch (stop) {
    case 'N.Vilnia':
        console.log('N.Vilnia');
    case 'Tremtiniu':
        console.log('Tremtiniu');
    case 'Rudens':
        console.log('Rudens');
    case 'K.Mindaugo':
        console.log('K.Mindaugo');
    case 'Z.Tiltas':
        console.log('Z.Tiltas');
        break;
    case 'Z.Tiltas1':
        console.log('Z.Tiltas');
    case 'K.Mindaugo1':
        console.log('K.Mindaugo');
    case 'Rudens1':
        console.log('Rudens');
    case 'Tremtiniu1':
        console.log('Tremtiniu');
    case 'N.Vilnia1':
        console.log('N.Vilnia');
}