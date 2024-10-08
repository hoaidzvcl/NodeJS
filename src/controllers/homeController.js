const connection = require('../config/database');

const homePage = (req, res) => {
    res.render('homePage');
}

const createUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(email,name,city);

    connection.query(
        `INSERT INTO 
        Users (email,name,city)
        VALUES (?,?,?)`,
        [email,name,city],
        function (err, results) {
            res.send('create sucessed');
        }
    );
}

module.exports = {
    homePage,
    createUser
}