// Author: Manel Benlloch - 15/10/2018
// Windows CMD Spanish Configuration, command: chcp 65001

/*
Realiza un programa que lea palabras por el teclado hasta que el usuario introduzca el carácter *.
 En ese momento, el programa imprimirá todas aquellas palabras que tenían al menos 3 vocales
*/

const rl = require("readline-sync");
let palabras = [];
let palabra = "";
let a = 0; let e = 0; let i = 0; let o = 0; let u = 0;
let result = "";
let analytics = "";

do {
    do {
        palabra = rl.question("Introduce una palabra: ").toLocaleLowerCase();
    } while (palabra === "");

    if (palabra === "*") {
        break;
    } else {
        palabras.push(palabra);
    }

} while (true);

/* ARRIBA * PERFECTO */

for (let value_i = 0; value_i <= palabras.length - 1; value_i++) {
    analytics = palabras[value_i];
    //console.log(palabras[value_i]);


    for (x = 0; x <= analytics.length - 1; x++) {
        if (analytics.charAt(x) === "a") { a = a + 1; }
        if (analytics.charAt(x) === "e") { e = e + 1; }
        if (analytics.charAt(x) === "i") { i = i + 1; }
        if (analytics.charAt(x) === "o") { o = o + 1; }
        if (analytics.charAt(x) === "u") { u = u + 1; }


    }
    result = (a + e + i + o + u);
    if (result > 2) {
        console.log(palabras[value_i]); result = 0;
        a = 0; let e = 0; let i = 0; let o = 0; let u = 0;
    }
    a = 0; let e = 0; let i = 0; let o = 0; let u = 0;
}
