require('dotenv').config();
const express = require('express');
const viewConfig = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express(); //App express
const port = process.env.PORT || 8888; //Cấu hình port
const hostname = process.env.HOST_NAME;

//config res.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

viewConfig(app);

app.use('/', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
});