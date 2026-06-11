    package metodo_quicksort;

    public class Quicksort {

        public static void quickSort(int[] arreglo, int inicio, int fin) {

            if (inicio < fin) {

                int pivote = particion(arreglo, inicio, fin);

                quickSort(arreglo, inicio, pivote - 1);
                quickSort(arreglo, pivote + 1, fin);
            }
        }

        public static int particion(int[] arreglo, int inicio, int fin) {

            int pivote = arreglo[fin];

            int i = inicio - 1;

            for (int j = inicio; j < fin; j++) {

                if (arreglo[j] < pivote) {

                    i++;

                    int temp = arreglo[i];
                    arreglo[i] = arreglo[j];
                    arreglo[j] = temp;
                }
            }

            int temp = arreglo[i + 1];
            arreglo[i + 1] = arreglo[fin];
            arreglo[fin] = temp;

            return i + 1;
        }



    }
