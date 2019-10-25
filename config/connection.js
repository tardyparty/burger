require('dotenv').config();
var mysql = require('mysql');

var host = process.env.DB_HOST;
var user = process.env.DB_USER;
var password = process.env.DB_PASSWORD;
var database = process.env.DB_NAME;

var connection = mysql.createConnection({
    host: host,
    port: 3306,
    user: user,
    password: password,
    database: database
});

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;