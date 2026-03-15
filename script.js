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
    for (let i = 10; i >= 0; i--) {
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