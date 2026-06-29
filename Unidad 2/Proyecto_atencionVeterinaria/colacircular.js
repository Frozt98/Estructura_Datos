// Definición de la clase para gestionar una estructura de datos de tipo Cola Circular
class ColaCircular {

    // Constructor que inicializa la cola con un límite de espacio
    constructor(capacidad) {

        this.capacidad = capacidad; 
        this.cola = new Array(capacidad); 

        this.front = 0; 
        this.rear = -1; 
        this.tamanio = 0; 

    }

    // Método analítico para verificar si la cola no tiene elementos
    estaVacia() {
        return this.tamanio === 0; // Retorna true si el tamaño actual es cero, de lo contrario false
    }

    // Método analítico para verificar si la cola alcanzó su límite máximo
    estaLlena() {
        return this.tamanio === this.capacidad; // Retorna true si el tamaño actual es igual a la capacidad máxima
    }

    // Método mutador para insertar una mascota al final de la cola circular
    encolar(mascota) {
        // Control de desbordamiento: si ya está llena, cancela la inserción
        if (this.estaLlena()) {
            console.log("\nLa cola está llena."); // Informa al usuario que no hay espacio
            return; // Termina la ejecución del método inmediatamente
        }
        // Calcula la nueva posición del puntero rear usando aritmética modular  para que vuelva a cero si llega al final
        this.rear = (this.rear + 1) % this.capacidad;
        this.cola[this.rear] = mascota; // Guarda el objeto mascota en la posición calculada del arreglo
        this.tamanio++; // Incrementa el contador de elementos guardados en la cola

        console.log("\nMascota registrada correctamente.");

    }

    // Método mutador para extraer y atender a la primera mascota de la cola
    desencolar() {
        // Control de subdesbordamiento: si no hay elementos, no se puede extraer nada
        if (this.estaVacia()) {
            console.log("\nNo existen mascotas en espera."); // Informa que la cola está vacía
            return;
        }

        const mascota = this.cola[this.front]; // Recupera temporalmente el objeto de la mascota al frente de la fila
        this.cola[this.front] = null; // Libera la posición del arreglo asignándole un valor nulo
        // Avanza el puntero front a la siguiente posición usando aritmética modular para mantener el comportamiento circular
        this.front = (this.front + 1) % this.capacidad;
        this.tamanio--; 

        // Muestra en consola todos los detalles de la mascota que acaba de ser atendida
        console.log("\n========== MASCOTA ATENDIDA ==========");
        console.log("Nombre      :", mascota.nombre);
        console.log("Especie     :", mascota.especie);
        console.log("Propietario :", mascota.propietario);
        console.log("Motivo      :", mascota.motivo);

    }

    // Método para recorrer la cola e imprimir los elementos en orden de espera sin destruirlos
    mostrarCola() {
        // Verifica si la cola está vacía antes de intentar recorrerla
        if (this.estaVacia()) {
            console.log("\nNo existen mascotas en espera."); 
            return;
        }
        console.log("\n========== COLA DE ESPERA ==========\n");
        let indice = this.front; // Copia el índice inicial en una variable auxiliar para no alterar el puntero original
        // Ciclo que se repite tantas veces como elementos reales haya en la cola
        for (let i = 0; i < this.tamanio; i++) {
            const mascota = this.cola[indice]; // Obtiene la mascota guardada en la posición actual
            console.log((i + 1) + "."); // Imprime el número de la posición en la fila de espera
            // Imprime las propiedades correspondientes a la mascota en esa posición
            console.log("Nombre      :", mascota.nombre);
            console.log("Especie     :", mascota.especie);
            console.log("Propietario :", mascota.propietario);
            console.log("Motivo      :", mascota.motivo);

            console.log(""); 

            // Avanza el índice auxiliar de forma circular para la siguiente iteración
            indice = (indice + 1) % this.capacidad;

        }

    }

    // Método de para observar el estado físico interno del arreglo y los punteros
    mostrarEstado() {

        console.log("\n========== ESTADO DE LA COLA CIRCULAR ==========");

        console.log("Front :", this.front); 
        console.log("Rear  :", this.rear); 
        console.log("Tamaño:", this.tamanio);

        console.log("\nArreglo:\n");

        // Recorre secuencialmente todas las celdas del arreglo desde el índice 0 hasta el final de la capacidad
        for (let i = 0; i < this.capacidad; i++) {

            // Si la celda actual es nula significa que ese espacio está libre
            if (this.cola[i] == null) {

                console.log("[" + i + "] Vacío"); // Imprime que el índice está vacío

            } else {

                // Si la celda contiene un objeto, imprime su índice y el nombre de la mascota almacenada
                console.log("[" + i + "] " + this.cola[i].nombre);

            }

        }

    }

}

module.exports = ColaCircular; // Exporta la clase para que pueda ser utilizada en otros archivos del proyecto