const express = require('express');
const morgan = require('morgan');
const database = require('./database');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configuration
app.use(bodyParser.json());
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
    console.log("Server running on port", app.get("port"));
});

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.options('/insert_cliente', cors())

// Routes
app.get("/", async (req, res) => {
    res.send("Back is working!");
});

app.get("/clientes", async (req, res) => {
    try {
        const connection = await database.getConnection();
        connection.query('SELECT * FROM cliente', function (error, results, fields) {
            if (error) throw error;
            res.send(results);
        });
    } catch (error) {
        console.error('Error al obtener la conexión:', error);
        res.status(500).send('Error al obtener la conexión a la base de datos');
    } 
});

app.get("/casilleros", async (req, res) => {
    try {
        const connection = await database.getConnection();
        const casillerosConsulta = `
                        SELECT
                            casillero.codigo,
                            casillero.fechacreacion,
                            casillero.valor,
                            cuerpo_celeste.nombre AS "cuerpo_celeste",
                            cliente.nombre AS "dueño"
                        FROM
                            casillero
                        JOIN
                            cliente ON cliente.id = casillero.cod_cliente
                        JOIN
                            cuerpo_celeste ON cuerpo_celeste.nombre = casillero.cuerpo_celeste;
                    `;
        connection.query(casillerosConsulta, function (error, results, fields) {
            if (error) throw error;
            res.header("Access-Control-Allow-Headers","Access-Control-Allow-Headers")
            res.send(results);
        });
    } catch (error) {
        console.error('Error al obtener la conexión:', error);
        res.status(500).send('Error al obtener la conexión a la base de datos');
    } 
});

app.post("/insert_cliente", async (req, res) => {
    try {
        const nuevoUsuario = req.body;
        console.log(nuevoUsuario);
        const connection = await database.getConnection();
        const insertarClientesQuery = `INSERT INTO cliente VALUES(${nuevoUsuario.cedula}, "${nuevoUsuario.nombre}", ${null},${null},${nuevoUsuario.saldo});`;
        connection.query(insertarClientesQuery, function (error, results, fields) {
            if (error) throw error;
        });
    } catch (error) {
        console.error('Error al obtener la conexión:', error);
        res.status(500).send('Error al obtener la conexión a la base de datos');
    } 
});

app.post("/insert_casillero", async (req, res) => {
    try {
        const nuevoCasillero = req.body;
        console.log(nuevoCasillero);
        const connection = await database.getConnection();
        const insertarClientesQuery = `INSERT INTO casillero VALUES(
            ${nuevoCasillero.codigo},
            "${nuevoCasillero.fechaCreacion}",
            ${nuevoCasillero.valor},
            "${nuevoCasillero.cuerpo_celeste}",
            ${nuevoCasillero.dueño}
            );`;
        connection.query(insertarClientesQuery, function (error, results, fields) {
            if (error) throw error;
        });
    } catch (error) {
        console.error('Error al obtener la conexión:', error);
        res.status(500).send('Error al obtener la conexión a la base de datos');
    } 
});
