const Sequelize = require("sequelize");
const sequelize = require("../dbconnect");

module.exports = sequelize.define("user", {
    id:{
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
    },
    firstname:{
        type: Sequelize.STRING(100),
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    role: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    isValid: {
        type: Sequelize.STRING(5),
        allowNull: false
    },
    createdAt: {
        type:Sequelize.DATE,
        allowNull: false
    },
    updatedAt:{
        type: Sequelize.DATE,
        allowNull: false
    }
});