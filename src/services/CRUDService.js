const connection = require('../config/database');

const getAllusers = async () => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users`
    )
    return results
};

const createUser = async(email,name,city) => {
    let[results, fields] = await connection.query(
        `INSERT INTO Users (email,name,city) VALUES (?,?,?)`, [email,name,city],
    );
};

const getUser = async (userId) => {
    let [results, fields] = await connection.query(
        `SELECT * FROM Users WHERE id = ?`,[userId]
    );
    let user = results && results.length > 0 ? results[0] : {};
    return user
}

const updateUser = async (email,name,city,userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users SET email=?, name=?, city=? WHERE id=?`, [email,name,city,userId],
    );
}

const deleteUser = async (userId) => {
    console.log(`Xóa người dùng với id: ${userId}`);
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id=?`,[userId],
    );
    return { success: true };
};

module.exports = {
    getAllusers, getUser, createUser, updateUser, deleteUser
};