class GrafoInfraestructura {

    constructor() {
        // Lista de adyacencia
        this.listaAdyacencia = new Map();

        // Relaciona el ID con el nombre del área
        this.nombresAreas = new Map();
    }

    // Agrega un nuevo vértice
    registrarArea(id, nombre) {

        this.nombresAreas.set(id, nombre);

        if (!this.listaAdyacencia.has(id)) {
            this.listaAdyacencia.set(id, []);
        }
    }

    // Agrega una conexión entre dos áreas
    agregarRuta(origen, destino, distancia) {

        this.listaAdyacencia.get(origen).push({
            nodo: destino,
            distancia: distancia
        });

        // Como es un grafo no dirigido,
        // también agregamos la ruta inversa.

        this.listaAdyacencia.get(destino).push({
            nodo: origen,
            distancia: distancia
        });
    }

    // Muestra todas las conexiones
    imprimirMapaRutas() {

        console.log("===== MAPA DE RUTAS =====\n");

        for (let [areaId, conexiones] of this.listaAdyacencia) {

            const nombre = this.nombresAreas.get(areaId);

            const rutas = conexiones.map(conexion => {

                return `${this.nombresAreas.get(conexion.nodo)} (${conexion.distancia} m)`;

            }).join(", ");

            console.log(`${nombre} está conectado con: ${rutas}`);
        }

    }

}

module.exports = GrafoInfraestructura;