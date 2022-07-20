const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'election'
});

module.exports=db;