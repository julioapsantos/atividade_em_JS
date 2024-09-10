const teclado = require('prompt-sync')({sigint:true});
let peso = parseFloat(teclado("digite seu peso"));
let altura = parseFloat(teclado("digite sua altura"));
let imc = peso/(altura*altura);
console.log(imc);
if(imc<18.5){

    console.log("você está abaixo do peso");
}
    else if (imc >=18.5 && imc < 24.9) {
        console.log("você está no peso ideal");
    } 
    else if (imc >=25 && imc < 29.9) {
        console.log("você está um pouco acima do peso");
    }    
   else if (imc >=30 && imc < 34.9) {
        console.log("você está na obesidade grau 1");
   }
    else if (imc >=35 && imc < 40) {
        console.log("você está na obesidade grau 2");
    }
    else if (imc >=40) {        
    
        console.log("você está na obesidade grau 3");
    }