'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Question', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      questionTitle: {
        type: Sequelize.STRING
      },
      questionContent: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.ENUM('pending', 'answered', 'spam'),
        defaultValue: 'pending'
      },
      answerContent: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      answeredBy: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      answeredAt: {
        type: Sequelize.DATE,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Question');
  }
};
