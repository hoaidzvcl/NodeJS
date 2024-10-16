const express = require('express');
const {getUsersApi, createUserApi, updateUserApi, deleteUserApi} = require('../controllers/apiController');
const routerApi = express.Router();

routerApi.get('/users', getUsersApi);

routerApi.post('/users', createUserApi);

routerApi.put('/users', updateUserApi);

routerApi.delete('/users', deleteUserApi);

module.exports = routerApi;