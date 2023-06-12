let stockA = 0;
let stockB = 10;
let stockC = 5;

function cargarStock() {
    const cantidad = parseInt(document.getElementById("cantidad").value);
    if (isNaN(cantidad)) {
        console.log("La cantidad ingresada no es válida.");
        return;
    }

    for (let i = 1; i <= cantidad; i++) {
        if (stockA < 30) {
            stockA++;
            console.log(`Se ha cargado una unidad de Producto A. Stock actual: ${stockA}`);
        } else {
            console.log(`No se puede cargar más stock de Producto A. Stock máximo alcanzado.`);
            break;
        }
    }

    actualizarStock();
}

function actualizarStock() {
    document.getElementById("stock").textContent = stockA + stockB + stockC;
    document.getElementById("stockInicialA").textContent = stockA;
    document.getElementById("stockActualA").textContent = stockA;
    document.getElementById("stockInicialB").textContent = stockB;
    document.getElementById("stockActualB").textContent = stockB;
    document.getElementById("stockInicialC").textContent = stockC;
    document.getElementById("stockActualC").textContent = stockC;
}

actualizarStock();
