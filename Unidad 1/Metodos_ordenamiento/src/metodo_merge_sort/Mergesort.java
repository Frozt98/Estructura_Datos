package metodo_merge_sort;

public class Mergesort {

    public static void mergeSort(int[] arreglo, int izquierda, int derecha) {

        if (izquierda < derecha) {

            int medio = (izquierda + derecha) / 2;

            mergeSort(arreglo, izquierda, medio);
            mergeSort(arreglo, medio + 1, derecha);

            merge(arreglo, izquierda, medio, derecha);
        }
    }

    public static void merge(int[] arreglo, int izquierda, int medio, int derecha) {

        int n1 = medio - izquierda + 1;
        int n2 = derecha - medio;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++) {
            L[i] = arreglo[izquierda + i];
        }

        for (int j = 0; j < n2; j++) {
            R[j] = arreglo[medio + 1 + j];
        }

        int i = 0, j = 0;
        int k = izquierda;

        while (i < n1 && j < n2) {

            if (L[i] <= R[j]) {
                arreglo[k] = L[i];
                i++;
            } else {
                arreglo[k] = R[j];
                j++;
            }

            k++;
        }

        while (i < n1) {
            arreglo[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arreglo[k] = R[j];
            j++;
            k++;
        }
    }


}