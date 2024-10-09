const connection = require('../config/database');
const {getAllusers, getUser} = require('../services/CRUDService');

const homePage = async (req, res) => {
    let results = await getAllusers();
    return res.render('homePage', {listUsers: results});
}

const createPage = (req, res) => {
    res.render('createPage');
}

const getUpdate = async (req, res) => {
    let userId = req.params.id;
    let results = await getUser(userId);
    res.render('update', {infoUser: results});
}

const createUser = async (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(email,name,city);

    let[results, fields] = await connection.query(
        `INSERT INTO Users (email,name,city) VALUES (?,?,?)`, [email,name,city],
    );
    res.send('ok');
}

module.exports = {
    homePage,
    createPage,
    createUser,
    getUpdate
}