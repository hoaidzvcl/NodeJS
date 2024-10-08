const express = require('express');
const { homePage, createUser } = require('../controllers/homeController');
const router = express.Router();

router.get('/', homePage);

router.post('/create-user', createUser);

module.exports = router;