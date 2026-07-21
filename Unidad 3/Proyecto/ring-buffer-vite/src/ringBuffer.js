// Buffer circular para frames de video con soporte de latencia.
export class RingBuffer {
  constructor(capacidad) {
    this.buffer = new Array(capacidad);
    this.capacidad = capacidad;
    this.frente = 0;
    this.fin = 0;
    this.tamanoActual = 0;
    this.framesDescartados = 0;
    this.lastFlashIndex = -1;
  }

  // Insertar: O(1)
  escribir(dato) {
    const frame = { data: dato, timestamp: performance.now() };

    if (this.tamanoActual === this.capacidad) {
      // Sobreescribe el dato más antiguo e incrementa el frente (descarte controlado)
      this.lastFlashIndex = this.fin;
      this.frente = (this.frente + 1) % this.capacidad;
      this.tamanoActual--;
      this.framesDescartados++;
    } else {
      this.lastFlashIndex = -1;
    }

    this.buffer[this.fin] = frame;
    this.fin = (this.fin + 1) % this.capacidad;
    this.tamanoActual++;
  }

  // Leer: O(1)
  leer() {
    if (this.tamanoActual === 0) return null;
    const frame = this.buffer[this.frente];
    this.buffer[this.frente] = undefined; // Liberación lógica de memoria
    this.frente = (this.frente + 1) % this.capacidad;
    this.tamanoActual--;
    return frame;
  }

  // Latencia: tiempo que el frame más antiguo lleva esperando en el buffer
  latencia() {
    if (this.tamanoActual === 0) return 0;
    return performance.now() - this.buffer[this.frente].timestamp;
  }
}
