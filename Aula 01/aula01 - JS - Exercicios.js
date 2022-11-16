/*
1. Crie as variáveis peso e altura leia e as inicialize com seu peso e sua altura. Calcule o valor do IMC
(peso / altura2).Associe o valor verdadeiro a variável obeso caso o valor do IMC seja maior ou igual
a 30. Imprima o texto, substituindo os valores em itálico pelas respectivas variáveis: O valor do IMC
para o peso de peso quilos e altura metros é de imc.
*/

let peso = 100;
let altura = 1.95;

let imc = (peso / (altura * altura)).toFixed(2);

if (imc >= 30) {
    let obeso = true;
}

console.log("RESULTADO EXERCICIO 01")
console.log("O valor do IMC para o peso de", peso, "quilos e ", altura, "metros é de", imc, ".\n")
console.log('O valor do IMC para o peso de ${peso} quilos e ${altura} metros é de ${imc} \n')

/*
2.Leia um número e aplique sobre ele a conjectura de Collatz. Ela diz que uma sequencia pode ser feita com base na seguinte
regra:
• Se o número n for par, o próximo é n / 2
• Se for ímpar é 3n+1
• A sequencia termina em 1
*/


let number = 12
var c = 0;
while (number > 1) {
    number = number % 2 ? 3 * number + 1 : number / 2;
    c++;
}

console.log("RESULTADO EXERCICIO 02");
console.log(c);

console.log('babab'.replace('a','o'));

/*
 3. Chico tem 1,50 metro e cresce 2 centímetros por ano, enquanto Zé tem 1,10 metro e cresce 3
centímetros por ano. Construa um algoritmo que calcule e imprima as alturas de Chico e Zé até que
Zé seja maior que Chico
 */

let chico = 150;
let ze = 110;
let ano = 0;

while (chico >= ze){
    chico = chico + 2;
    ze = ze + 3;
    ano = ano + 1;
}

console.log("\nRESULTADO EXERCICIO 03");
console.log("Chico tem ",chico.toFixed(0), "cent's e Zé tem",ze.toFixed(),"cent's. Em" ,ano,"anos.");
console.log('babab'.replace('a','o'));



