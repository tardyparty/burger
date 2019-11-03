require('dotenv').config();
var mysql = require('mysql');

var host = process.env.DB_HOST;
var port = process.env.DB_PORT;
var user = process.env.DB_USER;
var password = process.env.DB_PASSWORD;
var database = process.env.DB_NAME;

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}

else {
    connection = mysql.createConnection({
        host: host,
        port: port,
        user: user,
        password: password,
        database: database
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID " + connection.threadId);
});

module.exports = connection;