package metodo_insertion_sort;

public class Insertionsort {

    public static void insertionSort(int[] arreglo) {

        int n = arreglo.length;

        for (int i = 1; i < n; i++) {

            int clave = arreglo[i];
            int j = i - 1;

            while (j >= 0 && arreglo[j] > clave) {

                arreglo[j + 1] = arreglo[j];
                j--;
            }

            arreglo[j + 1] = clave;
        }
    }


}
