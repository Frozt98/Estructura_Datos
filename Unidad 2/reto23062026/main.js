const Tienda = require('./inventario.js'); 

function main() {
    console.log("=== TIENDA ===");
    const miTienda = new Tienda();

    miTienda.agregarProducto("Pan", 0.15);
    miTienda.agregarProducto("Muffin", 0.85);
    miTienda.mostrarProductos();

    miTienda.eliminarProducto("Pan");
    miTienda.mostrarProductos();

    console.log("=== FIN DEL PROGRAMA ===");
}
main();