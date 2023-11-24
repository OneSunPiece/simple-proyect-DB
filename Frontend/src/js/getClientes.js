// GetClientes
async function getClientes() {
    const response = await fetch("http://localhost:3000/clientes");
    const data = await response.json();
    return data;
}

// Obtener la referencia de la tabla
const tablaClientes = document.getElementById('tablaClientes');
const tbodyClientes = tablaClientes.querySelector('tbody');

function crearFilaCliente(cliente) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
    <td>${cliente.id}</td>
    <td>${cliente.nombre}</td>
    <td>${cliente.saldo}</td>
    <td>${cliente.descripcion}</td>
    `;
    return fila;
};


function mostrarClientes(){

    getClientes().then(clientes => {
        clientes.forEach(cliente => {
            const fila = crearFilaCliente(cliente);
            tbodyClientes.appendChild(fila);
        });
    });
};
mostrarClientes()