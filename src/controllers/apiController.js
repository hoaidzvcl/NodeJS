const connection = require('../config/database');
const User = require('../models/users');

const getUsersApi = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        data: results
    })
}

const createUserApi = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(email, name, city);
    let results = await User.create({
        email: email,
        name: name,
        city: city
    });

    return res.status(201).json({
        data: results
    })
    // await createUser(email, name, city);
    // res.redirect('/');
}

const updateUserApi = async (req, res) => {
    let userId = req.body.id;
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let user = await User.updateOne({ _id: userId }, { name: name, email: email, city: city });
    return res.status(200).json({
        data: user
    })
}

const deleteUserApi = async (req, res) => {
    const userId = req.body.id;
    // const result = await deleteUser(userId);
    const result = await User.deleteOne({ _id: userId });
    return res.status(200).json({
        data: result
    })
}

module.exports = {
    getUsersApi,
    createUserApi,
    updateUserApi,
    deleteUserApi
}