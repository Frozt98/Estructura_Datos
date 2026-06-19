import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const inventario = [
    { id: 1, nombre: "Laptop Asus vivobook s16", precio:1250.00, stock: 5 },
    { id: 2, nombre: "Mouse razer", precio: 67.00, stock: 14 },
    { id: 3, nombre: "Teclado mecanico", precio: 40.00, stock: 7 },
    { id: 4, nombre: "Monitor Asus Zencreen", precio: 169.75, stock: 3 },
    { id: 5, nombre: "Impresora epson l4160", precio: 200.00, stock: 5 },
    { id: 6, nombre: "Auriculares razer", precio: 45.00, stock: 13},
];

let carrito = [];

function mostrarProductos() {
    console.log("\n=== INVENTARIO ===");
    inventario.forEach(producto => {
        console.log(
            `${producto.id}. ${producto.nombre} | $${producto.precio} | Stock: ${producto.stock}`
        );
    });
}

function agregarProducto(id, cantidad) {
    const producto = inventario.find(p => p.id === id);

    if (!producto) {
        console.log("Producto no encontrado.");
        return;
    }
    if (!cantidad || cantidad <= 0) {
        console.log("Cantidad inválida.");
        return;
    }
    if (cantidad > producto.stock) {
        console.log("Stock insuficiente.");
        return;
    }

    producto.stock -= cantidad;


    carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad
    });

    console.log(`"${producto.nombre}" (x${cantidad}) agregado al carrito.`);
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        console.log("\nEl carrito está vacío.");
        return;
    }

    console.log("\n=== CARRITO (orden de agregado) ===");
    let total = 0;
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        console.log(
            `${index + 1}. ${item.nombre} | Cantidad: ${item.cantidad} | Subtotal: $${subtotal}`
        );
    });

    console.log(`Total: $${total}`);
}


function eliminarProducto() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
        return;
    }

    const eliminado = carrito.pop(); 


    const producto = inventario.find(p => p.id === eliminado.id);
    if (producto) {
        producto.stock += eliminado.cantidad;
    }

    console.log(
        `Producto eliminado (LIFO): ${eliminado.nombre} (x${eliminado.cantidad}). Stock restaurado.`
    );
}

function vaciarCarrito() {
    carrito.forEach(item => {
        const producto = inventario.find(p => p.id === item.id);
        if (producto) {
            producto.stock += item.cantidad;
        }
    });
    carrito = [];
    console.log("Carrito vacío. Stock restaurado.");
}

async function menu() {
    let opcion;
    do {
        console.log(`
====== CARRITO DE COMPRAS======
1. Mostrar productos
2. Agregar producto
3. Ver carrito
4. Eliminar último producto agregado
5. Vaciar carrito
6. Salir
        `);

        opcion = await rl.question("Seleccione una opción: ");

        switch (opcion) {
            case "1":
                mostrarProductos();
                break;

            case "2": {
                mostrarProductos();
                const id = parseInt(await rl.question("ID del producto: "));
                const cantidad = parseInt(await rl.question("Cantidad: "));
                agregarProducto(id, cantidad);
                break;
            }

            case "3":
                mostrarCarrito();
                break;

            case "4":
                eliminarProducto();
                break;

            case "5":
                vaciarCarrito();
                break;

            case "6":
                console.log("Bye.");
                break;

            default:
                console.log("Opción no válida.");
        }
    } while (opcion !== "6");

    rl.close();
}

menu();