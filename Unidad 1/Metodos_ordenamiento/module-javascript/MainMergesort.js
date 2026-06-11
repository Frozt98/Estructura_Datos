const mergeSort = require('./MergeSort');

const numeros = [];
for(let i = 0; i < 1000000; i++){
    numeros.push(Math.floor(Math.random() * 1000000));
}
console.log("Primeros 10 números desordenados:");
console.log(numeros.slice(0,10));

console.time("MergeSort");

const resultado = mergeSort(numeros);

console.timeEnd("MergeSort");

console.log("Primeros 10 números ordenados:");
console.log(resultado.slice(0,10));