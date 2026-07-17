const GrafoInfraestructura = require("./GrafoInfraestructura");

// Crear la red logística
const red = new GrafoInfraestructura();

// Centros de la infraestructura
const centros = [
    "Centro de Producción",
    "Centro de Acopio",
    "Centro de Distribución",
    "Almacén",
    "Punto de Entrega"
];

// Registrar los centros
centros.forEach((nombre, indice) => {
    red.registrarArea(indice, nombre);
});

// Agregar las rutas entre los centros
red.agregarRuta(0, 3, 15);
red.agregarRuta(0, 1, 30);
red.agregarRuta(1, 2, 10);
red.agregarRuta(4, 2, 20);
red.agregarRuta(3, 4, 25);

// Mostrar el mapa de rutas
red.imprimirMapaRutas();