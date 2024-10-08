const express = require('express');
const {homePage} = require('../controllers/homeController');
const router = express.Router();

router.get('/test',homePage );

module.exports = router;