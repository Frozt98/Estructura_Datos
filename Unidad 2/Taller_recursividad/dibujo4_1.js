// Función original del taller (para mantener la lógica idéntica)
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/**
 * Función auxiliar para rastrear y dibujar el árbol de ejecución en consola
 * @param {number} n - El número de Fibonacci a evaluar
 * @param {string} prefijo - Espacios que representan la profundidad en la pila
 * @param {string} relacion - Indica si es hijo izquierdo (n-1) o derecho (n-2)
 */
function dibujarArbolFibonacci(n, prefijo = "", relacion = "Raíz") {
    // Imprime la llamada actual simulando una rama del árbol
    console.log(`${prefijo}└── [${relacion}] f(${n})`);
    
    // Caso Base
    if (n <= 1) {
        return;
    }
    
    // Caso Recursivo: Incrementamos el prefijo (espacio) para los hijos
    let nuevoPrefijo = prefijo + "    ";
    
    // Evalúa primero la rama izquierda (n - 1)
    dibujarArbolFibonacci(n - 1, nuevoPrefijo, "n-1");
    
    dibujarArbolFibonacci(n - 2, nuevoPrefijo, "n-2");
}

function main() {
    console.log("=== ÁRBOL DE LLAMADAS DE EJECUCIÓN: fibonacci(4) ===\n");
    
    dibujarArbolFibonacci(4);
}

main();