/*
1. Para praticar a sintaxe, experimente criar um objeto chamado 
Circulo com raio 3. 
*/

/*
 2. Em seguida, programe os métodos para calcular a área
(PI*raio*raio) e o perímetro do círculo (2*PI*raio)
 */
const circulo = {
    raio: 3,
    area(){
        return Math.PI * this.raio * this.raio;
    },
    perimetro(){
        return 2 * Math.PI * this.raio;
    }
}

/*
3. Altere seu objeto círculo para utilizar a sintaxe com uma função
construtora chamada Circulo
*/
console.log(circulo.area());
console.log(circulo.perimetro());  
function criarCirculo(raio){
    return {
        raio,
        area(){
            return Math.PI * this.raio * this.raio;
        },
        perimetro(){
            return 2 * Math.PI * this.raio;
        }
    }
}
const circulo3 = criarCirculo(3);
class Circulo{
    #raio;
    constructor(raio){
        this.#raio = raio;
    }
    /*area(){
        return Math.PI * this.#raio * this.#raio;
    }
    perimetro(){    
        return 2 * Math.PI * this.#raio;
    }*/
    get area(){
        return Math.PI * this.#raio * this.#raio;
    }
    set area(area){ 
        this.#raio = Math.sqrt(area/Math.PI);
    }
    get perimetro(){
        return 2 * Math.PI * this.#raio;
    }
    set perimetro(perimetro) {
        this.#raio = perimetro/(2*Math.PI);
    }
    get raio() {
        return this.#raio
    }
    set raio(raio) {
        this.#raio = Math.abs(raio);
    }
    toString(){
        return `Circulo de raio ${this.#raio}`;
    }
    static criar(...lista){
        return lista
            .filter((raio) => typeof raio == 'number' && raio > 0)
            .map(raio => new Circulo(raio));
    }
}
let circulo1 = new Circulo(3);
//console.log(circulo1.area());
//console.log(circulo1.perimetro());
circulo1.area = 35;
let circulo2 = new Circulo(5);
circulo2.raio = -10;
console.log(`raio = ${circulo2.raio}`);
console.log(circulo2.area);
console.log(circulo2.perimetro);
console.log(circulo2.toString());
const circulos = Circulo.criar(1,2,"eee",3,4,5);
circulos.forEach(c => console.log(c.toString()));


