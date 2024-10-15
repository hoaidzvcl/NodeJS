const connection = require('../config/database');
const { getAllusers, createUser, getUser, updateUser, deleteUser } = require('../services/CRUDService');
const User = require('../models/users');

const homePage = async (req, res) => {
    let results = await User.find({});
    return res.render('homePage', { listUsers: results });
}

const createPage = (req, res) => {
    res.render('createPage');
}

const getUpdate = async (req, res) => {
    let userId = req.params.id;
    let results = await User.findById(userId);
    res.render('update', { infoUser: results });
}

const postCreateUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(email, name, city);
    await User.create({
        email: email,
        name: name,
        city: city
    });
    // await createUser(email, name, city);
    res.redirect('/');
}

const postUpdateUser = async (req, res) => {
    let userId = req.params.id;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    await User.updateOne({_id: userId},{name: name, email: email, city: city});
    // await updateUser(email, name, city, userId);
    res.redirect('/');
}

const getDelete = async (req, res) => {
    let userId = req.params.id;
    // let results = await getUser(userId);
    let results = await User.findById(userId);
    res.render('deletePage', { infoUser: results });
}

const confirmDelete = async (req, res) => {
    const userId = req.params.id;
    // const result = await deleteUser(userId);
    const result = await User.deleteOne({_id: userId});
    if (result.acknowledged && result.deletedCount > 0) {
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