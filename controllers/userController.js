// controllers/userController.js
const userModule = require('../modules/userModule');

const userController = {
    createUser: userModule.createUser,
    getAllUsers: userModule.getAllUsers,
    getUserById: userModule.getUserById,
    updateUser: userModule.updateUser,
    deleteUser: userModule.deleteUser
};

module.exports = userController;
