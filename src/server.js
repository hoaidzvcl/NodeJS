require('dotenv').config();
const express = require('express');
const viewConfig = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');
const apiRoutes = require('./routes/api');

const app = express(); //App express
const port = process.env.PORT || 8888; //Cấu hình port
const hostname = process.env.HOST_NAME;

//config res.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

viewConfig(app);

app.use('/', webRoutes);
app.use('/v1/api', apiRoutes);

(async () => {
  try {
    await connection();
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`)
    });
  } catch (error) {
    console.log(error)
  }
})()