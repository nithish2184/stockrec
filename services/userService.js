// services/userService.js
const db = require('../config/db.config');

const userService = {
    createUser: async (userData) => {
        const { username, email } = userData;
        try {
            const [result] = await db.promise().execute('INSERT INTO users (username, email) VALUES (?, ?)', [username, email]);
            return result.insertId;
        } catch (error) {
            throw error;
        }
    },

    getAllUsers: async () => {
        try {
            const [rows] = await db.promise().query('SELECT * FROM users');
            return rows;
        } catch (error) {
            throw error;
        }
    },

    getUserById: async (userId) => {
        try {
            const [rows] = await db.promise().query('SELECT * FROM users WHERE id = ?', [userId]);
            return rows[0];
        } catch (error) {
            throw error;
        }
    },

    updateUser: async (userId, userData) => {
        const { username, email } = userData;
        try {
            const [result] = await db.promise().execute('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, userId]);
            return result.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    },

    deleteUser: async (userId) => {
        try {
            const [result] = await db.promise().execute('DELETE FROM users WHERE id = ?', [userId]);
            return result.affectedRows > 0;
        } catch (error) {
            throw error;
        }
    }
};

module.exports = userService;
