'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('users', { 
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
    is_valid: {
        type: Sequelize.STRING(5),
        allowNull: false
    },
    created_at: {
        type:Sequelize.DATE,
        allowNull: false
    },
    updated_at:{
        type: Sequelize.DATE,
        allowNull: false
    }
    });
     
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('users');

  }
};
