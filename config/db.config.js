// config/db.config.js
const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'users'
});

module.exports = dbConnection;
