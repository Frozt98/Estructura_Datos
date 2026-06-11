package metodo_burbuja;

public class Bubblesort {

    public static void bubbleSort(int[] arreglo) {

        int n = arreglo.length;

        for (int i = 0; i < n - 1; i++) {

            for (int j = 0; j < n - i - 1; j++) {

                if (arreglo[j] > arreglo[j + 1]) {

                    int temp = arreglo[j];
                    arreglo[j] = arreglo[j + 1];
                    arreglo[j + 1] = temp;
                }
            }
        }
    }


}
