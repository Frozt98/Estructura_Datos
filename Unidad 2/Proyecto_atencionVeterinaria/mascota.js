// Definición de la clase entidad que servirá como plantilla de datos para cada mascota
class Mascota {

    // Constructor que define las propiedades que tendrá cada objeto mascota al ser creado
    constructor(nombre, especie, propietario, motivo) {

        this.nombre = nombre; 
        this.especie = especie; 
        this.propietario = propietario; 
        this.motivo = motivo; 
    }

}

module.exports = Mascota; // Exporta la clase Mascota para que pueda ser instanciada en el flujo principal del main