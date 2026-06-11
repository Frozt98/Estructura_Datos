function quickSort(arreglo) {

    if (arreglo.length <= 1) {
        return arreglo;
    }

    let pivote = arreglo[arreglo.length - 1];

    let izquierda = [];
    let derecha = [];

    for (let i = 0; i < arreglo.length - 1; i++) {

        if (arreglo[i] < pivote) {
            izquierda.push(arreglo[i]);
        } else {
            derecha.push(arreglo[i]);
        }
    }

    return [
        ...quickSort(izquierda),
        pivote,
        ...quickSort(derecha)
    ];
}
module.exports = quickSort;

