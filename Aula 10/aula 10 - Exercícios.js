/*
1  - Crie um timer que imprima o texto "PUC" a cada meio segundo. Pare o timer após 5 execuções.
*/

// setTimeout(() => {
//     console.log("PUC");
//     setTimeout(() => {
//         console.log("PUC");
//         setTimeout(() => {
//             console.log("PUC");
//             setTimeout(() => {
//                 console.log("PUC");
//                 setTimeout(() => {
//                     console.log("PUC");
//                 }, 500);
//             }, 500);
//         }, 500);
//     }, 500);
// }, 500);

let printCounter = 0;
const printPucpr = setInterval(() => {
    console.log('PUCPR');
    printCounter++;
    if (printCounter === 5) {
        clearInterval(printPucpr);
    }
}, 500);



/*
2 - Crie um timer que mostre no console a palavra "Pontíficia Universidade". Ele deve disparar um segundo
timer, que mostre no console o texto "Católica do", repita para um terceiro timer que mostre o texto "Paraná".
*/

setTimeout(() => {
    console.log("Pontíficia Universidade");
    setTimeout(() => {
        console.log("Católica do");
        setTimeout(() => {
            console.log("Paraná");
        }, 2000);
    }, 500);
}, 1000);


/*
3 - Cire 3 timers A (0.5s) B (0.2s) e C(0.8s). Os timers devem produzir os valores a=5, b=10 e c=2, respectivamente. Ao final dos 3 times, deve ser calculada 
a expressão: a+b*c. O programa deve continuar fucnionando mesmo se alterarmos os tempos dos timers entre uma execução e outra.
*/
let A = 500;
let B = 200;
let C = 800;
let a = 0;
let b = 0;
let c = 0;
let calc = 0;

setTimeout(() => {
    a = 5;
    setTimeout(() => {
        b = 10;
        setTimeout(() => {
            c = 2;
            calc = a + b * c;
            console.log(calc)
        }, C);
    }, B);
}, A);

/*
4. Escreva uma função testNum que receba um número como um argumento e retorne um Promise que resolve em 
caso o número seja maior que dez, ou rejeite caso contrário. Use-o exibindo uma mensagem em cada caso.
*/
function testNum(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num);
        } else {
            reject(num);
        }
    });
}

testNum(10)
    .then(v => console.log(`Numero é maior que 10: ${v}`))
    .catch(v => console.log(`Numero não é maior que 10: ${v}`))

/*
5. Escreva duas funções puras que retornem Promises: 
•A primeira, makeAllCaps(), receberá um array de palavras e tornará todas maiúsculas. 
Ela rejeitará caso o array contenha um dado que não seja string.
•A segunda, sortWords(), ordenará as palavras em ordem alfabética.
•Em seguida, teste-as
*/

function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        const result = [];
        for (let word of words) {
            if (typeof word !== 'string') {
                reject(word);
                return;
            }
            result.push(word.toUpperCase());
        }
        resolve(result);
    });
}

function sortWords(words) {
    return new Promise((resolve, reject) => {
        resolve([...words].sort());
    });
}

makeAllCaps(["carambola", "abacaxi", "banana"])
    .then(sortWords)
    .then(console.log)
    .catch(v => console.log("Não é um texto: " + v));


/*
6. Crie a função request(url, verbo='GET') que utilize o XMLHttpRequest na forma de um Promise. 
•Use-a para fazer o mesmo get que fizemos no exemplo 2. Não esqueça de tratar possíveis erros com o .catch. 
*/

function request(url, verbo = 'GET') {
    return new Promise((resolve, reject) => {
        var XMLHttpRequest = require('xhr2');

        const req = new XMLHttpRequest();
        req.open(verbo, url);
        req.onload = () => {
            if (req.status >= 400 && req.status <= 599) {   //OK    
                reject({ status: req.status, message: req.message });
            } else {
                resolve(req.response);
            }
        };
        req.error = () => { reject({ status: null, message: "Network error." }) }
        req.send();
    });
}

request("https://jsonplaceholder.typicode.com/posts/")
.then(JSON.parse)
.then(data => data.forEach(({title}) => console.log(title)))
.catch(console.error);