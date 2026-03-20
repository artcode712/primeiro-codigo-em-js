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

function somarNumeros() {

    let soma = 0;
    let continuar = true;


    while (continuar) {
        let numero = parseFloat(prompt("digite um numero (ou digite 0 para encerrar): "));

        // soma = soma + somarNumeros;
        //soma =+ mumero;

        if (isNaN(numero)) {
            alert("por favor digite um numero valido!");
        } else {

            soma += numero;
            console.log(soma);

        }

        continuar = confirm("deseja adicionar mais um numero.");

    }

    alert(" a soma dos numeros é: " + soma);

}

somarNumeros();

function questao_2() {

    console.log("Contagem regressiva para o lançamento do foguete da NASA!")
    for (let i = 10; i >= 0; i++) {
        console.log(i);
    }
    {
        console.log("Lançamento realizado!")
    }
}
questao_2();





function questao_3(){

    let ganho_total = 0;
    let gasto_total = 0;
    let mes = 1;

    while(mes <= 12){

        let ganho = parseFloat(prompt("Digite o ganho do mês " + mes));
        ganho_total += ganho;

        let gasto = parseFloat(prompt("Digite o gasto do mês " + mes));
        gasto_total += gasto;

        mes++;
    }

    let saldo = ganho_total - gasto_total;

    alert("Ganho anual: " + ganho_total);
    alert("Gasto anual: " + gasto_total);
    alert("Saldo final: " + saldo);

    if(saldo > 0){
        alert("Você lucrou esse ano!");
    }else{
        alert("Você teve prejuízo esse ano!");
    }

}

questao_3();


function questao_4(){

    let numeros = [];

    for(let i = 1; i <= 4; i++){

        let numero = Number(prompt("Digite um número inteiro " + i));

        while(!Number.isInteger(numero)){
            numero = Number(prompt("Digite algum número inteiro que seja valido"));
        }

        numeros.push(numero);
    }

    for(let i = 0; i < numeros.length; i++){
        for(let j = 0; j < numeros.length - 1; j++){

            if(numeros[j] < numeros[j+1]){

                let aux = numeros[j];
                numeros[j] = numeros[j+1];
                numeros[j+1] = aux;
            }
        }
    }
    alert("Números em ordem decrescente: " + numeros.join(", "));
}
questao_4();



function questao_5(){

    let numero = Number(prompt("Digite um número inteiro"));

    while(!Number.isInteger(numero)){
        numero = Number(prompt("Digite algum número inteiro que seja valido"));
    }

    if(numero % 2 === 0){
        console.log((numero + 1) + " agora é ímpar");
    }else{
        console.log((numero - 1) + " agora é par");
    }

}
questao_5();



function questao_6(){

    let letra = prompt("Digite uma letra: ");
    letra = letra.toLowerCase();

    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){

        console.log("A letra '" + letra + "' é uma vogal");

    } else{

        console.log("A letra '" + letra + "' é uma consoante");

    }

}
questao_6();



function questao_7(){

    const sabores = {
        a: {nome: "Chocolate", preco: 1.50},
        b: {nome: "Morango", preco: 2.50},
        c: {nome: "Creme", preco: 2.50},
        d: {nome: "Manga", preco: 3.20},
        e: {nome: "Melancia", preco: 3.40},
        f: {nome: "Vanilla Ice", preco: 3.00},
        g: {nome: "Céu Azul", preco: 3.60},
        h: {nome: "Brownie", preco: 4.00},
        i: {nome: "Hawaiano", preco: 5.00}
    };

    let continuar = true;

    while(continuar){

        let codigo = prompt("Digite o código do sabor:").toLowerCase();

        if(sabores[codigo]){
            alert("Sabor: " + sabores[codigo].nome + 
                  "\nPreço: R$ " + sabores[codigo].preco);
        }else{
            alert("Digite um código válido!");
        }

        continuar = confirm("Deseja ver outro código?");
    }
}
questao_7();


function questao_8(){

    let a = Number(prompt("Digite o primeiro número inteiro:"));

    while(!Number.isInteger(a)){
        a = Number(prompt("Digite um número inteiro válido!"));
    }

    let b = Number(prompt("Digite o segundo número inteiro:"));

    while(!Number.isInteger(b)){
        b = Number(prompt("Digite um número inteiro válido!"));
    }

    let diferenca = a - b;
    let soma = (2 * a) + (3 * b);
    let multi = a * b;

    alert("Diferença: " + diferenca);
    alert("Dobro do primeiro + triplo do segundo: " + soma);
    alert("Multiplicação: " + multi);
}
questao_8();

function questao_9(){

    let numeros = [];

    for(let i = 1; i <= 2; i++){

        let numero = Number(prompt("Digite um número inteiro:"));

        while(!Number.isInteger(numero)){
            numero = Number(prompt("Digite um número inteiro válido!"));
        }

        numeros.push(numero);
    }

    
    if(numeros[0] < numeros[1]){
        let aux = numeros[0];
        numeros[0] = numeros[1];
        numeros[1] = aux;
    }

    alert("Números em ordem: " + numeros.join(", "));
}
questao_9();

function questao_10(){

    let nome = prompt("Digite o nome do funcionário:");
    let salario = Number(prompt("Digite o salário bruto:"));

    let desconto = salario * 0.08;
    let total = salario - desconto;

    alert("Nome: " + nome +
          "\nSalário bruto: R$ " + salario +
          "\nDesconto: R$ " + desconto +
          "\nSalário líquido: R$ " + total);
}
questao_10();

function questao_11(){

    let nome = prompt("Digite o nome do funcionário:");
    let salario = Number(prompt("Digite o salário bruto:"));

    let taxa;

    if(salario <= 1000){
        taxa = 0.08;
    }else if(salario < 1500){
        taxa = 0.085;
    }else{
        taxa = 0.09;
    }

    let desconto = salario * taxa;
    let total = salario - desconto;

    alert("Nome: " + nome +
          "\nSalário bruto: R$ " + salario.toFixed(2) +
          "\nTaxa: " + (taxa * 100) + "%" +
          "\nDesconto: R$ " + desconto.toFixed(2) +
          "\nSalário líquido: R$ " + total.toFixed(2));
}
questao_11();