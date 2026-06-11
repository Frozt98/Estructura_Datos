package metodo_burbuja;

import java.util.Random;

public class Main {
    public static void main(String[] args) {

        int[] numeros = new int[1000000];

        Random random = new Random();

        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = random.nextInt(1000000);
        }

        Bubblesort metodo = new Bubblesort();

        System.out.println("Datos generados");

        long inicio = System.currentTimeMillis();

        metodo.bubbleSort(numeros);

        long fin = System.currentTimeMillis();

        System.out.println("Arreglo ordenado");

        System.out.println("Tiempo: " + (fin - inicio) + " ms");

        System.out.println("Primeros 10 números:");

        for (int i = 0; i < 10; i++) {
            System.out.print(numeros[i] + " ");
        }
    }
}
