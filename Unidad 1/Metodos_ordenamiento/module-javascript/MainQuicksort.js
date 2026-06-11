const quickSort = require('./QuickSort');

const numeros = [];

for(let i = 0; i < 1000000; i++){
    numeros.push(Math.floor(Math.random() * 1000000));
}
// Mostrar desordenados
console.log("Primeros 10 números desordenados:");
console.log(numeros.slice(0,10));

// Tiempo inicial
console.time("QuickSort");

// Ordenar
const resultado = quickSort(numeros);

// Tiempo final
console.timeEnd("QuickSort");

// Mostrar ordenados
console.log("Primeros 10 números ordenados:");
console.log(resultado.slice(0,10));