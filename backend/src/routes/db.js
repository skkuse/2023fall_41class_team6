// const dotenv = require("dotenv");
// const config = require('../config/config');
// const mysql = require('mysql2');

// dotenv.config(); //LOAD CONFIG

// const connection = mysql.createConnection(config);

// try {
//     connection.connect();
//     console.log("[server] DB connection is sucessfull")
// } catch (e) {
//     console.error(e);
// }

// module.exports = connection

const mysql = require('mysql')
const dotenv = require('dotenv');
dotenv.config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, PORT } = process.env;

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: PORT
  });
  
db.connect(function (err) {
  if (err) console.error("mysql connection error : " + err);
});

module.exports = db;
