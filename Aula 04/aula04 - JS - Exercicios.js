const albuns = [
    {nome: "Mais", cantor: "Marisa monte", ano: 1991, nota: 8.5},
    {nome: "A tempestade", cantor: "Legião Urbana", ano: 1996, nota: 9.5},
    {nome: "Domingo", cantor: "Titãs", ano: 1995, nota: 7.5},
    {nome: "Ouro de Minas", cantor: "Roupa Nova", ano: 2001, nota: 8},
    {nome: "Como estão vocês", cantor: "Titãs", ano: 2003, nota: 7},
    {nome: "Troco Likes", cantor: "Thiago Iorc", ano: 2015, nota: 4.5},
    {nome: "Dois", cantor: "Legião Urbana", ano: 1986, nota: 10},
    {nome: "Radiola", cantor: "Skank", ano: 2004, nota: 6.5},
    {nome: "Roupa acústico", cantor: "Roupa Nova", ano: 2004, nota: 9},
    {nome: "Umbilical", cantor: "Thiago Iorc", ano: 2011, nota: 3.5},
    {nome: "Barulhinho bom", cantor: "Marisa monte", ano: 1996, nota: 7.5}
];

const cantores = [    
    {nome: "Vinícius de Moraes", estilo: "MPB"},    
    {nome: "Rita Lee", estilo: "Rock"},
    {nome: "Marisa monte", estilo: "MPB"},
    {nome: "Legião Urbana", estilo: "Rock"},
    {nome: "Titãs", estilo: "Rock"},
    {nome: "Roupa Nova", estilo: "Pop rock"},
    {nome: "Thiago Iorc", estilo: "Nova MPB"},
    {nome: "Skank", estilo: "Pop rock"}
];

console.log("---------- INICIO - EXERCÍCIO 01 ---------- ")
/* 1. Gere uma lista de objetos com o nome e ano de todos os álbuns da Marisa Monte */
const marisa = albuns.filter(x => x.cantor == "Marisa monte");
console.log(marisa);
console.log("----------   FIM - EXERCÍCIO 01  ----------  \n")


console.log("----------  INICIO - EXERCÍCIO 02 ---------- ")
/*2. Gere uma lista contendo o nome de todos os cantores e álbuns. A lista deve conter só os textos, não objetos. */
let cantoresEAlbuns = albuns.flatMap(a => [a.cantor, a.nome]);
console.log(cantoresEAlbuns);
console.log("----------   FIM - EXERCÍCIO 02   ----------  \n")


console.log("----------  INICIO - EXERCÍCIO 03 ---------- ")
/* 3. Calcule a média da nota dos discos anteriores ao ano de 2005 */
const discosAntigos = albuns
    .filter(a => a.ano < 2005);
const somaNotas = discosAntigos.reduce((soma, album) => soma += album.nota, 0);
const mediaNotas = somaNotas / discosAntigos.length;
console.log(`Média das notas: ${mediaNotas.toFixed(2)}`);

console.log("----------   FIM - EXERCÍCIO 03   ----------  \n")


console.log("----------  INICIO - EXERCÍCIO 04 ---------- ")
/* 4. Gere uma lista contendo o nome de todos os cantores, sem repetições */
console.log("ATIVIDADE 4 e 5");
const cantoresUnicos = albuns.reduce((c, a) => {
    if (!c[a.cantor]) c[a.cantor] = 0;
    c[a.cantor]++;
    return c;
}, {});

console.log(Object.keys(cantoresUnicos)); 
console.log("----------  FIM - EXERCÍCIO 04 ---------- ")


console.log("----------  INICIO - EXERCÍCIO 05 ---------- ")
/* 5 - Gere uma lista contendo a quantidade de álbuns que cada cantor possui */
console.log(cantoresUnicos);
console.log("----------  FIM - EXERCÍCIO 05 ---------- ")


console.log("----------  INICIO - EXERCÍCIO 06 ---------- ")
/*6. Crie a função justDate que recebe uma data e retorna a mesma data, mas com os campos de tempo zerados*/
function justDate(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
console.log(`date:${justDate(new Date())}`);
console.log("----------  FIM - EXERCÍCIO 06 ---------- ")


console.log("----------  INICIO - EXERCÍCIO 07 ---------- ")
/*7. Crie as funções de comparação de datas: before e after. Adicione um parâmetro opcional inclusive com 
valor padrão false que permite considerar também a própria data. */
function before(date1, date2, inclusive = false) {
    if (inclusive) {
        return date1 <= date2;
    }
    return date1 < date2;
}
console.log(`before:${before(new Date(2020, 1, 1), new Date(2020, 1, 2))}`);
function after(date1, date2, inclusive = false) {
    if (inclusive) {
        return date1 >= date2;
    }
    return date1 > date2;
}   
console.log(`after:${after(new Date(2020, 1, 1), new Date(2020, 1, 2))}`);
console.log("----------  FIM - EXERCÍCIO 07 ---------- ")


console.log("----------  INICIO - EXERCÍCIO 08 ---------- ")
/*8. Crie a função between que recebe uma data, uma data de inicio, outra de fim e uma terceira data. Teste se a 
data está no meio desse intervalo. Adicione um objeto desestruturado opcional no quarto parâmetro para permitir 
os parâmetros opcionais inclusiveStart e inclusiveEnd */
function between(date, date1, date2, {inclusiveStart = false, inclusiveEnd = false} = {}) {
    if (inclusiveStart && inclusiveEnd) {
        return date >= date1 && date <= date2;
    }
    if (inclusiveStart) {
        return date >= date1 && date < date2;
    }
    if (inclusiveEnd) {
        return date > date1 && date <= date2;
    }
    return date > date1 && date < date2;
}
console.log(`between:${between(new Date(2020, 1, 2), new Date(2020, 1, 1), new Date(2020, 1, 3))}`);
console.log("----------  FIM - EXERCÍCIO 08 ---------- ")


console.log("----------  INICIO - EXERCÍCIO 09 ---------- ")
/* 9. Crie uma função que recebe uma data inicial, um número ne um intervalo de tempo. Ela deve retornar uma lista, 
contando as npróximas datas considerando esse intervalo de tempo. */
function listInterval(date, n, interval){
    let list = [];
    for (let i = 0; i < n; i++) {
        list.push(new Date(date));
        date = interval(date);
    }
    return list;    
}
console.log(`listInterval:${listInterval(new Date(2020, 1, 1), 3, d => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1))}`);
console.log("----------  FIM - EXERCÍCIO 09 ---------- ")


console.log("----------  INICIO - EXERCÍCIO 10 ---------- ")
/* 10. Crie uma lista de álbuns ordenada por ano. Não altere a lista original de álbuns */
const albunsOrdenados = [...albuns]
   .sort((a, b) => a.ano - b.ano);
console.log(albunsOrdenados);
console.log("----------  FIM - EXERCÍCIO 10 ---------- ")


console.log("----------  INICIO - EXERCÍCIO 11 ---------- ")
/* 11. Crie a função paginador que recebe uma lista e um tamanho de página. Ela deve retonar outra função que quando 
chamada com um número de página, retorne apenas os elementos daquela 
página */
let pagina = paginador(albuns, 3);
console.log(pagina(1));

function paginador(lista, tamanhoPagina = 10) {
    return function(nrPagina = 0) {
        const inicio = nrPagina * tamanhoPagina;
        const fim = (nrPagina+1) * tamanhoPagina;

        return lista.slice(inicio, fim);
    }
}
console.log("----------  FIM - EXERCÍCIO 11  ---------- ")


console.log("----------  INICIO - EXERCÍCIO 12 ---------- ")
/*12. Crie a função media, que recebe uma lista e opcionalmente um nome de campo. 
•Caso o nome de campo seja fornecido, calcule a média dos valores desse campo
•Caso não seja, faça a média utilizando os próprios elementos da lista */
let avg = media(albuns, "nota");
console.log(`avg:${avg}`);
let avg2 = media([1,2,3,4,5]);
console.log(`avg2:${avg2}`);
function media(lista, propriedade) {
    if (propriedade) {
        return lista.reduce((soma, item) => soma += item[propriedade], 0) / lista.length;
    }
    return lista.reduce((soma, item) => soma += item, 0) / lista.length;
}
console.log("----------  FIM - EXERCÍCIO 12 ---------- ")
