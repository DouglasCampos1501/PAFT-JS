/*
 1. Crie uma lista com alguns valores e imprima:
 • Os valores positivos
 • A média de todos os valores
*/
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let soma = 0;
let vezes = 0;

for(let receb of valores){
    soma += receb;
    vezes ++;
    if( receb % 2 == 0)
        console.log(receb);
}
let media = soma / vezes;
console.log('A média dos valores apresentado é' ,media);
console.log("\n")


/* 
2. Crie uma lista com 15 pessoas lendo seu nome e cor.
• As cores podem ser “branco”, “negro”, “pardo” e “outro”
• Em seguida, mostre quantas pessoas tem cada cor
• Tente resolver esse problema sem usar uma cadeia de “ifs” ou switch
*/

const lista = [
    {nome : "NomeUm", cor: "Branco"},
    {nome : "NomeDois", cor: "Negro"},
    {nome : "NomeTres", cor: "Pardo"},
    {nome : "NomeQuatro", cor: "Outro"},
    {nome : "NomeCinco", cor: "Branco"},
    {nome : "NomeSeis", cor: "Branco"},
    {nome : "NomeSete", cor: "Negro"},
    {nome : "NomeOito", cor: "Pardo"},
    {nome : "NomeNove", cor: "Outro"},
    {nome : "NomeDez", cor: "Branco"},
    {nome : "NomeOnze", cor: "Branco"},
    {nome : "NomeDoze", cor: "Negro"},
    {nome : "NomeTreze", cor: "Pardo"},
    {nome : "NomeQuatorze", cor: "Outro"},
    {nome : "NomeQuinze", cor: "Branco"}
    ]

const corBranca = lista.filter(lista => lista.cor == "Branco");
const corNegra = lista.filter(lista => lista.cor == "Negro");
const corParda = lista.filter(lista => lista.cor == "Pardo");
const corOutra = lista.filter(lista => lista.cor == "Outro");

console.log("Na lista temos",corBranca.length,"pessoas com a cor Branca.");
console.log("Na lista temos",corNegra.length,"pessoas com a cor Negra.");
console.log("Na lista temos",corParda.length,"pessoas com a cor Parda.");
console.log("Na lista temos",corOutra.length,"pessoas com outra cor.");
console.log("\n")

/* 
3. Crie o jogo de adivinhar um número de 1 até 100.
•Caso ele entre um número maior escreva “Maior”
•Caso ele entre um número menor escreva “Menor”
•Caso ele entre com um número fora do intervalo ( 0 ou maior que 100) fale “desistiu?“ e acabe o jogo
•O jogo deve perguntar até o usuário desistir ou falar o valor correto.
*/

let numCorrect = 50;
let num = prompt("Entre com um número:")

while(num > 100 || num < 1){
    console.log("entrei aqui")
    if(num = numCorrect){
        cdocument.getElementById("result").innerHTML ='Você acertou o número correto era:', numCorrect;
    }else{
        let num = prompt("Entre com um número:")
    }
}
if(num > 100){
    document.getElementById("out").innerText = "Maior";
    document.getElementById("result").innerHTML = "Desistiu?... saindo do jogo";
}else{
    document.getElementById("out").innerHTML ="Menor";
    document.getElementById("result").innerHTML = "Desistiu?... saindo do jogo";
}