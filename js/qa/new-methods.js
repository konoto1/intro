const text = 'Labas rytas';

console.log(text.repeat(2));

String.prototype.firstSymbol = function () {

    return this[0];
}

console.log(text[0]);
console.log(text.firstSymbol());

String.prototype.isUpperCase = function () {
    return '' + this === ('' + this).toUpperCase();
}

console.log('ABC'.isUpperCase());
console.log('ABc'.isUpperCase());

Number.prototype.double = function () {
    return this * 2;
}

console.log((9).double());