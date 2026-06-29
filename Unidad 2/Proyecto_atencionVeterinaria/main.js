const prompt = require("prompt-sync")(); // Importa y ejecuta la librería para capturar datos por consola de forma síncrona

const Mascota = require("./mascota"); 
const ColaCircular = require("./colacircular"); 

const veterinaria = new ColaCircular(5); // Instancia una cola circular con una capacidad fija de 5 espacios para la veterinaria

let opcion; // Declara la variable global que almacenará la opción elegida por el usuario

// Estructura repetitiva de control para asegurar que el menú se ejecute al menos una vez
do {
    // Bloque de impresiones estéticas para construir la interfaz visual del menú en la terminal
    console.log("\n====================================");
    console.log(" SISTEMA DE ATENCIÓN VETERINARIA");
    console.log("====================================");

    console.log("1. Registrar mascota");
    console.log("2. Atender siguiente mascota");
    console.log("3. Mostrar cola de espera");
    console.log("4. Salir");

    opcion = Number(prompt("\nSeleccione una opción: ")); // Solicita la opción al usuario y la convierte explícitamente a tipo numérico

    // Estructura selectiva múltiple que evalúa la opción ingresada
    switch (opcion) {

        case 1: // Flujo para la opción de registrar e ingresar una nueva mascota
            console.log("\n----- REGISTRO DE MASCOTA -----");
            const nombre = prompt("Nombre de la mascota: "); 
            const especie = prompt("Especie: "); 
            const propietario = prompt("Propietario: ");
            const motivo = prompt("Motivo de consulta: "); 

            // Instancia un nuevo objeto de tipo Mascota pasando las variables recolectadas al constructor
            const mascota = new Mascota(
                nombre,
                especie,
                propietario,
                motivo

            );

            veterinaria.encolar(mascota); // Invoca el método encolar para meter la mascota en la estructura circular
            veterinaria.mostrarEstado(); // Muestra el estado técnico de los punteros y celdas tras la inserción
            break; // Finaliza la ejecución de este caso específico

        case 2: // Flujo para la opción de atender a la mascota que va primero
            veterinaria.desencolar(); // Llama al método desencolar para retirar y mostrar el elemento al frente
            veterinaria.mostrarEstado(); // Muestra el estado físico de los punteros tras retirar el elemento

            break; // Finaliza la ejecución de este caso específico

        case 3: // Flujo para consultar la lista de espera actual
            veterinaria.mostrarCola(); // Invoca el método que imprime las mascotas activas en orden de llegada
            veterinaria.mostrarEstado(); // Muestra el estado de la memoria interna de la cola

            break; // Finaliza la ejecución de este caso específico

        case 4: // Flujo de salida del sistema
            console.log("\nGracias por utilizar el sistema.");
            break; // Finaliza la ejecución de este caso específico

        default: // Caso de contingencia si el usuario ingresa un número que no corresponde a ninguna opción del menú

            console.log("\nOpción inválida."); 

    }

} while (opcion != 4); // El bucle continuará repitiéndose indefinidamente mientras la opción elegida no sea 4