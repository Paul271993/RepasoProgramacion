"use strict";
exports.__esModule = true;
exports.sumaCaracteres = void 0;
function sumaCaracteres(nombres) {
    var totalStrings = 0;
    for (var i = 0; i < nombres.length; i++) {
        totalStrings += nombres[i].length;
    }
    return totalStrings;
}
exports.sumaCaracteres = sumaCaracteres;
console.log(sumaCaracteres(["Mar", "Jose", "Manolo", "Marta"]));
