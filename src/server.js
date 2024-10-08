require('dotenv').config();
const express = require('express');
const viewConfig = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express(); //App express
const port = process.env.PORT || 8888; //Cấu hình port
const hostname = process.env.HOST_NAME;

viewConfig(app);

app.use('/', webRoutes);

// A simple SELECT query
connection.query(
  'select * from Users u',
  function (err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
)

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
});