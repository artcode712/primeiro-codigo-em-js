// console.log("Hello world")

// let nome = "joao";


// console.log(nome);
// console.log(pi);

// const pi = 3.14;
// console.log(pi);

// let n1 = 1;
// let n2 = 2;
// console.log(n1 + n2);

// function saudacao() {
//     console.log("ola meu nome é " + nome);
// };

// function somar(n3, n4) {
//     console.log(n3 + n4);

// };
// saudacao();
// somar(2, 4);

function somarNumeros(){

let soma = 0;
let continuar = true;


while(continuar){
let numero = parseFloat(prompt("digite um numero (ou digite 0 para encerrar): "));

// soma = soma + somarNumeros;
//soma =+ mumero;

if (isNaN(numero)){
alert("por favor digite um numero valido!");
}else{

soma += numero;
console.log(soma);

}

continuar = confirm("deseja adicionar mais um numero.");

}

alert(" a soma dos numeros é: " + soma);

}

somarNumeros();