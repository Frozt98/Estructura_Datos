function Insertionsort(arreglo) {

    let n = arreglo.length;

    for (let i = 1; i < n; i++) {

        let clave = arreglo[i];
        let j = i - 1;

        while (j >= 0 && arreglo[j] > clave) {

            arreglo[j + 1] = arreglo[j];
            j--;
        }

        arreglo[j + 1] = clave;
    }

    return arreglo;
}
module.exports = Insertionsort;
