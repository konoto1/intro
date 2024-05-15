/*
As noiu pamatyti visas galimas laiko/laikrodzio kombinacijas valandos tikslumu
Intervalas yra nuo 1 iki 12.
Pateikimo formatas: 1:00, 2:00
1:00
1:15
1:30
1:45
...
4:45
*/

// for (let val = 1; val <= 4; val++) {
//     console.log('-------');
//     let min = 0;
//     console.log(val + ':' + min);
//     min += 15;
//     console.log(val + ':' + min);
//     min += 15;
//     console.log(val + ':' + min);
//     min += 15;
//     console.log(val + ':' + min);
//     min += 15;
// }


// for (let val = 1; val <= 4; val++) {
//     console.log('-------');
//     let min = 0;
//     let sec = 0;
//     for (let i = 0; i < 4; i++) {
//         sec = 0;
//         for (let z = 0; z < 4; z++) {
//             console.log(val + ':' + min + ':' + sec);
//             sec += 15;
//         }
//         min += 15;
//     }
// }

for (let val = 15; val <= 15; val++) {
    for (let min = 0; min < 4; min++) {
        for (let sek = 0; sek < 60; sek++) {
            console.log(val + ':' + min + ':' + sek);
        }
    }
}