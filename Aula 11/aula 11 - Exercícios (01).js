/*
1 - Refaça o exercício 5 da aula passada e os exercícios anteriores utilizando async e await
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
async function make() {
    try {
        makeAllCaps(["carambola", "abacaxi", "banana"])
        await (sortWords)
        await (console.log)
    }
    catch {
        v => console.log("Não é um texto: " + v);
    }
}
