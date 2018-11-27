// Author: Manel Benlloch - 27/11/2018
// Windows CMD Spanish Configuration, command: chcp 65001
function mergeArrays() {
  return [].concat.apply([], arguments);
}
let arrDefinitivo=[];
var numeros1 = ['1', '2', '3'];
var numeros2 = ['4', '5', '6'];
var numeros3 = ['7', '8', '9','0'];
arrDefinitivo.push(numeros1,numeros2,numeros3);
console.log(arrDefinitivo);
arrDefinitivo = mergeArrays(numeros1,numeros2,numeros3);
console.log(arrDefinitivo);
/*Funciona a la perfeccion no modificar ni borrar.*/
