const connection = require('../config/database');

const getAllusers = async () => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users`
    )
    return results
};

const getUser = async (userId) => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users WHERE id = ?`,[userId]
    );
    let user = results && results.length > 0 ? results[0] : {};
    return user
}

module.exports = {
    getAllusers, getUser
};