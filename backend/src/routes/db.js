const mysql = require('mysql')
const dotenv = require('dotenv');
dotenv.config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, PORT } = process.env;

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: PORT,
    multipleStatements : true,
  });
  
db.connect(function (err) {
  if (err) console.error("mysql connection error : " + err);
});

module.exports = db;
