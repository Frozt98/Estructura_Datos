package metodo_quicksort;

import java.util.Random;

public class Main {
    public static void main(String[] args) {

        int[] numeros = new int[1000000];

        Random random = new Random();

        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = random.nextInt(1000000);
        }

        Quicksort metodo = new Quicksort();

        System.out.println("Datos generados");

        long inicio = System.currentTimeMillis();

        metodo.quickSort(numeros, 0, numeros.length - 1);

        long fin = System.currentTimeMillis();

        System.out.println("Tiempo: " + (fin - inicio) + " ms");

        System.out.println("Primeros 10 números:");

        for (int i = 0; i < 10; i++) {
            System.out.print(numeros[i] + " ");
        }
    }
}
