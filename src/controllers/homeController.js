const connection = require('../config/database');
const { getAllusers, createUser, getUser, updateUser, deleteUser } = require('../services/CRUDService');

const homePage = async (req, res) => {
    let results = await getAllusers();
    return res.render('homePage', { listUsers: results });
}

const createPage = (req, res) => {
    res.render('createPage');
}

const getUpdate = async (req, res) => {
    let userId = req.params.id;
    let results = await getUser(userId);
    res.render('update', { infoUser: results });
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(email, name, city);

    await createUser(email, name, city);
    res.redirect('/');
}

const postUpdateUser = async (req, res) => {
    let userId = req.params.id;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    await updateUser(email, name, city, userId);
    res.redirect('/');
}

const getDelete = async (req, res) => {
    let userId = req.params.id;
    let results = await getUser(userId);
    res.render('deletePage', { infoUser: results });
}

const confirmDelete = async (req, res) => {
    const userId = req.params.id;
    const result = await deleteUser(userId);
    if (result.success) {
        // res.send(`Người dùng với id ${userId} đã được xóa thành công!`);
        res.redirect('/');
    } else {
        res.send(`Có lỗi khi xóa người dùng với id ${userId}.`);
    }
}

module.exports = {
    homePage,
    createPage,
    postCreateUser,
    getUpdate,
    postUpdateUser,
    getDelete,
    confirmDelete
}