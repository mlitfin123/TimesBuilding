var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    //database is on JawsDB
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    //database is local
    connection = mysql.createConnection({
        multipleStatements: true, 
        host: "localhost",
        port: 3306,
        user: "root",
        password: "SoccerLiberty2006!",
        database: "burgers_db"

    });
}

    connection.connect(function(err) {
        if (err) {
            console.error("error connecting: " + err.stack);
            return;
        }
        console.log("connected as id " + connection.threadId);
        });

module.exports = connection;