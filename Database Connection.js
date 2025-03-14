const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'password', // Replace with your MySQL password
    database: 'accounting_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});

module.exports = db;