// Author: Manel Benlloch - 15/10/2018
// Windows CMD Spanish Configuration, command: chcp 65001
// const rl=require("readline-sync");
let x=[1,2,3,4,5,6,7,8]
let y=[1,2,3,4,5,6,7,8]
let total="";
let row='';  
    for (let value_i of x) {
        let row=' ';
        for(let value_j of y) {
            
            if (value_i%2===0) {
                
                if (value_j%2===0) {
                    total=" B ";
                 } else {
                     total=" N ";
                 }

            }else{

                if (value_j%2===0) {
                    total=" N ";
                 } else {
                     total=" B ";
                }
                
            }
            
            row=row+total;
            if(total===8){row=row+" ";}
            
        }
        console.log(row);    
    }
