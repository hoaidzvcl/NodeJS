const express = require('express');
const { homePage, createUser, createPage, getUpdate } = require('../controllers/homeController');
const router = express.Router();

router.get('/', homePage);
router.get('/create', createPage);
router.get('/update/:id', getUpdate);

router.post('/create-user', createUser);

module.exports = router;