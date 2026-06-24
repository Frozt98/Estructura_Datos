class Tienda {
    constructor() {
        this.productos = []; 
    }

    agregarProducto(nombre, precio) {
        const nuevoProducto = {
            nombre: nombre,
            precio: precio
        };
        this.productos.push(nuevoProducto);
        console.log(`Producto agregado: ${nombre}`);
    }

    eliminarProducto(nombre) {
        this.productos = this.productos.filter(producto => producto.nombre !== nombre);
        console.log(`Producto eliminado: ${nombre}`);
    }

    mostrarProductos() {
        console.log("\n --- INVENTARIO ---");
        if (this.productos.length === 0) {
            console.log("Vacío");
        } else {
            this.productos.forEach((p, i) => console.log(`${i + 1}. ${p.nombre} - $${p.precio}`));
        }
        console.log("-------------------\n"); 
    }
}
function main() {
    console.log("=== INICIANDO TIENDA ===");
    const miTienda = new Tienda();


    miTienda.agregarProducto("Pan", 0.15);
    miTienda.agregarProducto("Muffin", 0.85);
    miTienda.mostrarProductos();

    miTienda.eliminarProducto("Pan");
    miTienda.mostrarProductos();
}