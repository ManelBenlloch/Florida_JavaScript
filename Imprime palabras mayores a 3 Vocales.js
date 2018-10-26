// Author: Manel Benlloch - 15/10/2018
// Windows CMD Spanish Configuration, command: chcp 65001
const rl = require("readline-sync");

let items = [];
let item = undefined;
let contador = 1;
let result = " ";
console.log("<<<---Welcome to Shop List v1.00 --->>>");
console.log("<<<---El programa termina cuando envias una respuesta vacia, para enviar pulsa Enter ⏎ . --->>>");
do {
    do {
        item = rl.question("Introduce el item " + contador + " :").toLocaleLowerCase();
        if (item === "") {
            item = "";
            console.log("Has introducido una cadena vacia lo que significa que no hay nada mas que añadir.");

            break;
        }
        if (items.indexOf(item) > -1) {
            console.log("El item esta repetido vuelve a introducir uno diferente.");
        } else {
            items.push(item);
            console.log("Item agregado correctaente.");
            contador++;
        }
    } while (items.indexOf(item) > -1);

} while (item != "");

// Mostrando datos
if (items.length !== 0) {
    console.log("\n Mostrando la lista de la compra... \n _____________________________________");
    contador = 0;
    for (let index = 0; index < items.length; index++) {
        contador++;
        console.log(" " + contador + ": " + items[index]);
    }
    console.log(" _____________________________________");
} else {
    console.log("\n <<-- La lista esta vacia, no hay nada que mostrar. -->");
}
