const mysql = require ("mysql")
const util = require ("util")
var connection; 

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'notetaker_db'
    })
}

connection.connect(function(err){
    if(err){
        console.error(err.stack)
        return
    }
    console.log('connected as id: ' + connection.threadId)
})

connection.query = util.promisify(connection.query)

module.exports = connection;