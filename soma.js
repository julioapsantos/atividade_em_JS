const teclado = require('prompt-sync')({sigint:true});
let n = parseInt(teclado("digite um número "));
let soma = '' ;
for (let i = 1; i <=10; i++){
    soma += `${n} + ${i} = ${n + i}\n`;
}
console.log(soma);
