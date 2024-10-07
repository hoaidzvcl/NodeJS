const express = require('express');
const path = require('path');

const viewConfig = (app) => {
    app.set('view engine', 'ejs'); //Khai báo view engine
    app.set('views', path.join('./src', 'views')); //path views

    app.use(express.static(path.join('./src', 'public'))) //Path static file
};

module.exports = viewConfig;