//Resolucion de la question 5
let b1 = false + 50;
// let b2 = false + 50n; // -> error!

let b3 = false + "JavaScript";

// let n1 = 300 + 10n; // -> error!
let n2 = 300 + false;
let n3 = 300 + " estudiantes";

// let bi1 = 500n + 20; // -> error!
// let bi2 = 500n + false; // -> error!
let bi3 = 500n + " puntos";

let s1 = "Edad: " + 25;
let s2 = "Código: " + 999n;
let s3 = "Activo: " + false;
let s4 = "Curso " + 3;
let s5 = "Grupo " + 7n;
let s6 = "Disponible: " + true;

console.log(`${b1} [${typeof b1}]`);
console.log(`${b3} [${typeof b3}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${n3} [${typeof n3}]`);
console.log(`${bi3} [${typeof bi3}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${s3} [${typeof s3}]`);
console.log(`${s4} [${typeof s4}]`);
console.log(`${s5} [${typeof s5}]`);
console.log(`${s6} [${typeof s6}]`);