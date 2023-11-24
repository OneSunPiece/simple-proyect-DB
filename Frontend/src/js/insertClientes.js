//
async function enviarCliente() {
    const nombre = document.getElementById('nombre').value;
    const cedula = document.getElementById('cedula').value;
    const saldo = document.getElementById('saldo').value;
    
    const nuevoUsuario = {
        "cedula": cedula,
        "nombre": nombre,
        "saldo": saldo
    };
    // Enviar datos al backend (puedes usar fetch, axios, etc.)
    const response = await fetch('http://localhost:3000/insert_cliente', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario),
    }).catch(err => console.error(err));
    const data = await response.json();
    console.log(data)
    return data;
}


// Get a reference to the button element by its ID

const botonEnviarCliente = document.getElementById('enviarCliente');
// Attach the click event listener to the button
botonEnviarCliente.addEventListener('click', enviarCliente );