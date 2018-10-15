// Author: Manel Benlloch - 15/10/2018
// Windows CMD Spanish Configuration, command: chcp 65001

const rl=require("readline-sync");
let a=0;let e=0;let i=0;let o=0;let u=0;

let textVAR=rl.question("Introduce un texto aqui: ");

for (let x = 0; x<= textVAR.length; x++) {
   // console.log(textVAR.charAt(x));
    if(textVAR.charAt(x)==="a"){
        a=a+1;
    }
    if(textVAR.charAt(x)==="e"){
        e=e+1;
    }
    if(textVAR.charAt(x)==="i"){
        i=i+1;
    }
    if(textVAR.charAt(x)==="o"){
        o=o+1;
    }
    if(textVAR.charAt(x)==="u"){
        u=u+1;
    }
}

console.log("El texto Contiene: "+ a+" - Letras a");
console.log("El texto Contiene: "+ e+" - Letras e");
console.log("El texto Contiene: "+ i+" - Letras i");
console.log("El texto Contiene: "+ o+" - Letras o");
console.log("El texto Contiene: "+ u+" - Letras u");
