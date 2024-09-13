const teclado = require('prompt-sync')({sigint:true});
let num1 = parseInt(teclado("digite um número "));
let tabuada = '' ;
for (let i = 1; i <=10; i++){
    tabuada += `${num1} x ${i} = ${num1 * i}\n`;
}
console.log(tabuada);