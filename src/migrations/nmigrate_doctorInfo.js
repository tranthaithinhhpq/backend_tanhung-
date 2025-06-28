'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('DoctorInfo', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },

      userId: {                       // FK -> User
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'User', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      positionId: {                   // FK -> Position
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Position', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      degreeId: {                     // FK -> Degree
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Degree', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      clinicId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Clinic', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      specialtyId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: { model: 'Specialty', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },

      biography: { type: Sequelize.TEXT },   // Giới thiệu, kinh nghiệm, v.v.
      price: { type: Sequelize.INTEGER },    // Phí khám mặc định (nếu cần)

      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('DoctorInfo');
  },
};
