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

cargarStock();
