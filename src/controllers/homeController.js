const homePage = (req, res) => {
    res.render('homePage');
}

const createUser = (req, res) => {
    res.send('create ok');
    console.log(req.body);
}

module.exports = {
    homePage,
    createUser
}