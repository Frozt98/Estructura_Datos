/**
 * Clase encargada de auditar la red urbana de la UNLD.
 * Gestiona una topología de centros de acopio representados
 * como nodos en un Map y permite simular cargas estocásticas
 * para pruebas de estrés.
 */
class AuditoriaRedUrbana {
  /**
   * Inicializa la auditoría con un mapa vacío de centros de acopio.
   * @complexity O(1)
   */
  constructor() {
    this.centrosAcopio = new Map();
  }

  /**
   * Simula una carga de eventos distribuidos uniformemente sobre
   * los centros de acopio. Cada evento se asigna a un nodo aleatorio
   * (0-99) y se almacena como un paquete ecológico.
   *
   * @param {number} eventos - Cantidad de eventos a simular
   * @returns {void}
   * @complexity O(n) - donde n = eventos; cada iteración realiza
   *                     operaciones O(1) sobre el Map
   */
  simularCargaEstocastica(eventos) {
    console.log("Iniciando auditoría de estrés sobre red UNLD...");
    for (let i = 0; i < eventos; i++) {
      const nodoId = Math.floor(Math.random() * 100);
      if (!this.centrosAcopio.has(nodoId)) {
        this.centrosAcopio.set(nodoId, []);
      }
      this.centrosAcopio.get(nodoId).push(`Paquete-Eco-${i}`);
    }
    console.log(`Auditoría finalizada: ${this.centrosAcopio.size} nodos procesados.`);
  }
}

const unlD = new AuditoriaRedUrbana();
unlD.simularCargaEstocastica(10000);