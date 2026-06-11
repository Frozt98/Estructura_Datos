function mergeSort(arreglo) {

    if (arreglo.length <= 1) {
        return arreglo;
    }

    let medio = Math.floor(arreglo.length / 2);

    let izquierda = arreglo.slice(0, medio);
    let derecha = arreglo.slice(medio);

    return merge(
        mergeSort(izquierda),
        mergeSort(derecha)
    );
}

function merge(izquierda, derecha) {

    let resultado = [];

    while (izquierda.length && derecha.length) {

        if (izquierda[0] < derecha[0]) {
            resultado.push(izquierda.shift());
        } else {
            resultado.push(derecha.shift());
        }
    }

    return resultado
        .concat(izquierda)
        .concat(derecha);
}
module.exports = mergeSort;
