/*
1 - Crie uma função chamada mais, que aceite 2 parâmetros e os some. 
Utilize as 3 sintaxes possíveis;
*/
function mais(x, y) {
    return mais = x + y;
}
mais(3, 4);
console.log(mais);


const mais2 = function (x, y) {
    return x + y;
}
console.log(mais2(3, 4));


const mais3 = (x, y) => x + y;
console.log(mais3(3, 4));

/*
2 - Crie uma função chamada menos. Caso seja passado apenas 1 parâmetro, retorne o valor negativo. Caso seja passados 2 parâmetros retorna a subtração dos dois.
*/
function menos(x, y) {
    if (y !== Number) {
        return -x
    }
    return x - y;
}
console.log(menos(10));
console.log(menos(8, 2));

/*
3 - Crie um função eCrescente que teste se a lista informada é ou não crescente. A sequencia não será considerada crescente se houver um número menor que seu antecessor imediato.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
let ret = true;
for (i = 0; i < numbers.length; i++) {
    //console.log(numbers[i]);
    if (numbers[i] < numbers[i-1]) {
        ret = false
    }
}
if(ret !== true){
    console.log("Não é uma lista creescente");
}else{
    console.log("É uma lista creescente");
}

/*
4 - Crie a função maior, que encontre o maior entre todos os valores passados em seus argumentos. 
console.log(maior(1,10,-1,5)); //Imprime 10
console.log(maior(1,-100,5)); //Imprime 5
*/

const maiorNumero = 0;
const listas = [1, 2, 3, 4, 5, 6, 7, 8]
function maior(y, ...parms){
    for (i = 0; i < maior.length; i++) {
        console.log(numbers[i]);
        if (maior[i] > maior[i-1]) {
            maiorNumero = maior[i];
        }
    }
}
maior(1, 2, 3, 4, 5, 6, 7, 8);
console.log(maiorNumero);


/*
5. Escreva sua própria versão da função join. Esta função recebe uma lista e um separador (por padrão ",") e gera o texto dos objetos em seu interior 
separados por esse separador. Não se esqueça que o separador não ocorre após o último objeto da lista
*/

function join(valores, separador = ",") {
    if (valores.length === 0) return "";
    let saida = `${valores[0]}`;
    for (let i = 1; i < valores.length; i++) {
       saida += `${separador}${valores[i]}`
    }
    return saida;
 }
 
 /*
 6. Crie uma função que receba uma lista de objetos e um campo, e retorne uma 
lista com todos os valores desse campo sem repetição
  */
function unicos(valores, campo) {
    const resultados = {};
    for (const valor of valores) {
        resultados[valor[campo]] = true;
    }
    return Object.keys(resultados);
}

/* 
7. Escreva a versão não recursiva e a recursiva de uma função para calcular o nésimo termo da sequencia de Fibonnaci
*/
function fib1(n) {
    let n1 = 1;
    let n2 = 1;
    let result = n1;
    for (const i = 2; i <= n; i++) {
        result = n1 + n2;
        n1 = n2;
        n2 = result;
    }
    return result;
}
function fib2(n) {
    if (n <= 1) return 1;
    return fib2(n-1) + fib2(n-2);
}
const fib3 = n => n <= 1 ? 1 : fib3(n-1) + fib3(n-2);

/*
8. Crie uma função mapear que aceite um array e uma função de mapeamento. Essa 
função recebe um elemento do array, realiza sobre ele qualquer cálculo, retornando 
outro.
*/
const dobro = mapear([1,2,3,4], x => x * 2);
console.log(dobro); //[2,4,6,8]
function mapear(array, fn) {
    const out = [];
    for (const valor of array) {
        out.push(fn(valor));
    }
    return out;
}

/*
9. Crie a função Collatz que aceita como parâmetro o elemento inicial da 
sequencia de Collatz e retorna uma função. A cada chamada dessa função, retorne o 
próximo elemento da sequencia.
*/
const seq = collatz(5);
console.log(seq()); //16
console.log(seq()); //8
console.log(seq()); //4
console.log(seq()); //2
console.log(seq()); //1
function collatz(elem) {
    let inicio = elem;
    return function() {
        if (elem % 2 == 0) {
            elem /= 2;
        } else {
            elem = 3 * inicio + 1;
        }
        return elem;
    }
}

/*
10. Crie a função verbose que recebe uma função como parâmetro e retorna outra, 
que imprime no console toda chamada que for feita na função original com seu 
resultado.
*/
function verbose(fn) {
    return function(...values) {
        const result = fn(...values);
        console.log(`${fn.name}(${values.join(",")}) = ${result}`);
        return result;
    }
}

/*
11. Crie a função fixar que aceita uma função f e valores de parâmetros.
Ela retorna outra função que chama f com esses parâmetros passados por primeiro 
como se estivessem “fixos”.
*/
function log(modulo, nivel, texto) {
    console.log(`${nivel}: ${texto} (${modulo})`)
}
let logAula = fixar(log, `aula.js`, 'INFO');
logAula("Exemplo");  //Imprime INFO: Exemplo (aula.js)
logAula("PUCPR");  //Imprime INFO: PUCPR (aula.js)
let soma10 = fixar(soma, 10);
console.log(soma10(50)); //imprime 60
function fixar(fn, ...esquerda) {
    return function(...direita) {
        return fn(...esquerda, ...direita);
    }
}






