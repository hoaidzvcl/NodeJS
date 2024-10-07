require('dotenv').config();
const express = require('express');
const viewConfig = require('./config/viewEngine');
const webRoutes = require('./routes/web');

const app = express(); //App express
const port = process.env.PORT || 8888; //Cấu hình port
const hostname = process.env.HOST_NAME;

viewConfig(app);

app.use('/',webRoutes);

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
});