// Author: Manel Benlloch - 15/10/2018
// Windows CMD Spanish Configuration, command: chcp 65001
// const rl=require("readline-sync");
let x=[1,2,3,4,5,6,7,8,9,10]
let y=[1,2,3,4,5,6,7,8,9,10]
let total="";
let row='';  
    for (let value_i of x) {
        let row=' ';
        for(let value_j of y) {
            
            total=(value_i*value_j+" ");
            row=row+total;
                 if(total<10){
                     row=row+" ";
                  
                 }    
        }
        console.log(row);    
    }
