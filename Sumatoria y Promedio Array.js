// Author: Manel Benlloch - 15/10/2018
// Windows CMD Spanish Configuration, command: chcp 65001

const rl=require("readline-sync");
let numeros=new Array(10);

for (let index = 1; index <=10; index++) {
    let num=parseInt(rl.question("Introduce un número: "));
    numeros.push(num);
    
}
let sumatoria = numeros.reduce(function(a, b){
    return a + b; 
  }, 0);

  let promedio = sumatoria / numeros.length;
console.log(promedio);
