//Ejercicio 3.1: Recorridos de Árboles Binarios
class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierdo = null;
        this.derecho = null;
    }
}
function recorridoInorden(raiz) {
    if (raiz === null) return [];
    return [
        ...recorridoInorden(raiz.izquierdo),
        raiz.valor,
        ...recorridoInorden(raiz.derecho)
    ];
}

function recorridoPreorden(raiz) {
if (raiz === null) return [];
    return [
        raiz.valor,
        ...recorridoPreorden(raiz.izquierdo),
        ...recorridoPreorden(raiz.derecho)
    ];
}

function recorridoPostorden(raiz) {
if (raiz === null) return [];
    return [
        ...recorridoPostorden(raiz.izquierdo),
        ...recorridoPostorden(raiz.derecho),
        raiz.valor
    ];
}
const miArbol = new NodoArbol(10);
miArbol.izquierdo = new NodoArbol(5);
miArbol.derecho = new NodoArbol(15);
miArbol.izquierdo.izquierdo = new NodoArbol(2);
miArbol.izquierdo.derecho = new NodoArbol(7);
miArbol.derecho.derecho = new NodoArbol(20);

// 2. Imprimimos los arreglos resultantes en la consola
console.log("=== RECORRIDOS DE ÁRBOL BINARIO ===");

console.log("Preorden (Raíz -> Izq -> Der):");
console.log(recorridoPreorden(miArbol)); 

console.log("\nInorden (Izq -> Raíz -> Der):");
console.log(recorridoInorden(miArbol)); 

console.log("\nPostorden (Izq -> Der -> Raíz):");
console.log(recorridoPostorden(miArbol)); 

