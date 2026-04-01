const configViewEngine = require('./config/viewEngine')
const express = require('express');
const connection = require('./config/database')
const webRoutes = require('./routes/web')
const app = express();
const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 8081;

// config req,body

app.use(express.json())
app.use(express.urlencoded({extended:true}))


require('dotenv').config()
configViewEngine(app)

app.use('/', webRoutes)


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
