const configViewEngine = require('./config/viewEngine')
const express = require('express');
const webRoutes = require('./routes/web')
const app = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8081;

// get the client
const mysql = require('mysql2');

require('dotenv').config()
configViewEngine(app)

app.use('/test', webRoutes)

// test connection
// create the connection to database

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
database: 'hoidanit',
port: 3307,
password: '123456'
});

// simple query

// simple query
connection.query(
'select * from users u' ,
function (err, results, fields) {
console.log('results = ',results); // results contains rows returned by
console.log(fields); // fields contains extra meta data al
}
)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
