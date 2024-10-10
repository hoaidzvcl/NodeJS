const express = require('express');
const { homePage, postCreateUser, createPage, getUpdate, postUpdateUser, getDelete, confirmDelete } = require('../controllers/homeController');
const router = express.Router();

router.get('/', homePage);
router.get('/create', createPage);
router.get('/update/:id', getUpdate);
router.get('/delete/:id',getDelete);

router.post('/create-user', postCreateUser);
router.post('/saveUpdate/:id', postUpdateUser);
router.get('/confirmDelete/:id', confirmDelete);

module.exports = router;