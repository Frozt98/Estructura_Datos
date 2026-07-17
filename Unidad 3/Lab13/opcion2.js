const GrafoInfraestructura = require("./GrafoInfraestructura");

// Crear una red simplificada
const redSimple = new GrafoInfraestructura();

// Registrar únicamente dos áreas
redSimple.registrarArea(0, "Centro de Producción");
redSimple.registrarArea(3, "Almacén");

// Agregar la única ruta
redSimple.agregarRuta(0, 3, 15);

// Mostrar el mapa de rutas
redSimple.imprimirMapaRutas();