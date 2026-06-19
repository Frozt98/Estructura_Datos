import java.util.Random;

public class CentroDistribucion {
    
    public static int buscarLineal(Paquete[] lista, int id) {
        for (int i = 0; i < lista.length; i++) {
            if (lista[i].getId() == id) return i;
        }
        return -1;
    }

    public static int buscarBinario(Paquete[] lista, int id) {
        // Validar que el arreglo esté ordenado antes de buscar
        for (int i = 0; i < lista.length - 1; i++) {
            if (lista[i].getId() > lista[i + 1].getId()) {
                throw new IllegalStateException(
                    "Error: el arreglo no está ordenado. La búsqueda binaria requiere datos ordenados."
                );
            }
        }

        int bajo = 0, alto = lista.length - 1;
        while (bajo <= alto) {
            int medio = bajo + (alto - bajo) / 2;
            if (lista[medio].getId() == id) return medio;
            if (lista[medio].getId() < id) bajo = medio + 1;
            else alto = medio - 1;
        }
        return -1;
    }

}