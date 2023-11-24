var mysql  = require('mysql');
var dotenv = require('dotenv');
dotenv.config();

var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});


const getConnection = async () => await connection;

module.exports = {getConnection};
