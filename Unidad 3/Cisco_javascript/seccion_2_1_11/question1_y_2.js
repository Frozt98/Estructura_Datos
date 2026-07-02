//Resolucion de question 1 y 2
//Question 1
let booleano1 = true;
let booleano2 = Boolean("true");

let numero1 = 100;
let numero2 = Number("100");

let bigInt1 = 10000n;
let bigInt2 = BigInt("10000");

let string1 = "Hola";
let string2 = String("Hola");

let indefinido1 = undefined;


//Question 2
console.log(`${booleano1}[${typeof booleano1}]`);
console.log(`${booleano2}[${typeof booleano2}]`);

console.log(`${numero1}[${typeof numero1}]`);
console.log(`${numero2}[${typeof numero2}]`);

console.log(`${bigInt1}[${typeof bigInt1}]`);
console.log(`${bigInt2}[${typeof bigInt2}]`);

console.log(`${string1}[${typeof string1}]`);
console.log(`${string2}[${typeof string2}]`);

console.log(`${indefinido1}[${typeof indefinido1}]`);