const MotorAutocompletado = require('./MotorAutocompletado');

const motor = new MotorAutocompletado();
const diccionario = ["paquete_express", "postal_nacional", "prioritario", "estandar", "perecedero"];

// Carga de términos
diccionario.forEach(termino => motor.insertarTermino(termino));
console.log("Diccionario de paquetería cargado exitosamente.");

// Opción A: Llamadas individuales
console.log("Sugerencias para 'p':", motor.obtenerSugerencias("p"));
console.log("Sugerencias para 'pa':", motor.obtenerSugerencias("pa"));
console.log("Sugerencias para 'pos':", motor.obtenerSugerencias("pos"));

// Opción B: Simulación de entrada de usuario (Bucle iterativo)
const prefijosPrueba = ["p", "pa", "pos", "e", "pe"];
console.log("\n--- Simulación de Bucle de Búsqueda ---");
prefijosPrueba.forEach(prefijo => {
  console.log(`Buscando '${prefijo}':`, motor.obtenerSugerencias(prefijo));
});