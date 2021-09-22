const mysql = require('mysql2');
const connection = mysql.createConnection({
    host     : 'localhost', // MYSQL HOST NAME
    user     : 'phpmyadmin',        // MYSQL USERNAME
    password : 'bddmyadmin',    // MYSQL PASSWORD
    database : 'scrumble'      // MYSQL DB NAME
});
module.exports = connection;