
// getCasilleros
async function getCasilleros() {
    const response = await fetch("http://localhost:3000/casilleros");
    const data = await response.json();
    return data;
}

// Obtener la referencia de la tabla
const tablaCasilleros = document.getElementById('tablaCasilleros');
const tbodyCasilleros = tablaCasilleros.querySelector('tbody');

function crearFilaCasillero(casillero) {
    const fila = document.createElement('tr');
    fila.innerHTML = `
    <td>${casillero.codigo}</td>
    <td>${casillero.valor}</td>
    <td>${Date(casillero.fechacreacion)}</td>
    <td>${casillero.cuerpo_celeste}</td>
    <td>${casillero.dueño}</td>
    `;
    return fila;
};
function mostrarCasilleros(){
    getCasilleros().then(casilleros => {
        casilleros.forEach(casillero => {
            const filaCasillero = crearFilaCasillero(casillero);
            tbodyCasilleros.appendChild(filaCasillero);
        });
    });
};

mostrarCasilleros()
