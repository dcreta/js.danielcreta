let stock = 0;
const producto = "Producto A";

function cargarStock() {
    const cantidad = parseInt(prompt(`Ingrese la cantidad de unidades de ${producto} a cargar:`));
    if (isNaN(cantidad)) {
        console.log("La cantidad ingresada no es válida.");
        return;
    }
  
    for (let i = 1; i <= cantidad; i++) {
        if (stock < 30) {
            stock++;
            console.log(`Se ha cargado una unidad de ${producto}. Stock actual: ${stock}`);
        } else {
            console.log(`No se puede cargar más stock de ${producto}. Stock máximo alcanzado.`);
            break;
        }
    }
}

const precioUnitario = 10.99;
const proveedor = "Proveedor X";

const productoObjeto = {
  nombre: producto,
  stockInicial: stock,
  stockActual: stock,
  precioUnitario: precioUnitario,
  proveedor: proveedor
};

const productos = [
  productoObjeto,
  { nombre: "Producto B", stockInicial: 10, stockActual: 10, precioUnitario: 15.99, proveedor: "Proveedor Y" },
  { nombre: "Producto C", stockInicial: 5, stockActual: 5, precioUnitario: 8.99, proveedor: "Proveedor Z" }
];

function buscarProducto(nombre) {
  return productos.filter(producto => producto.nombre.toLowerCase().includes(nombre.toLowerCase()));
}

cargarStock();
