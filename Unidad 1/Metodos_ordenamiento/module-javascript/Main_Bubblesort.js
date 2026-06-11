const bubbleSort = require('./BubbleSort');

const numeros = [];

for(let i = 0; i < 1000000; i++){
    numeros.push(Math.floor(Math.random() * 1000000));
}

console.log("Datos generados");

console.time("BubbleSort");

const resultado = bubbleSort(numeros);

console.timeEnd("BubbleSort");

console.log("Primeros 10 números:");

console.log(resultado.slice(0,10));