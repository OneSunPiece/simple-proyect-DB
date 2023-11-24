//
async function enviarCasillero() {
    const codigo = document.getElementById('codigo').value;
    const fechaCreacion = document.getElementById('fechaCreacion').value;
    const valor = document.getElementById('valor').value;
    const cuerpo_celeste = document.getElementById('cuerpo_celeste').value;

    const nuevoCasillero = {
        "codigo": codigo,
        "fechaCreacion": fechaCreacion,
        "valor": valor,
        "cuerpo_celeste": cuerpo_celeste,
        "dueño": 1
    };
    // Enviar datos al backend (puedes usar fetch, axios, etc.)
    const response = await fetch('http://localhost:3000/insert_casillero', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoCasillero),
    }).catch(err => console.error(err));
    const data = await response.json();
    console.log(data)
    return data;
}


// Get a reference to the button element by its ID

const botonEnviarCasillero = document.getElementById('enviarCasillero');
// Attach the click event listener to the button
botonEnviarCasillero.addEventListener('click', enviarCasillero );