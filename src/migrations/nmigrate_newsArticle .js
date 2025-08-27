'use strict';
export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('NewsArticle', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      title: { type: Sequelize.STRING, allowNull: false },
      content: { type: Sequelize.TEXT },
      image: { type: Sequelize.STRING },
      status: { type: Sequelize.ENUM('draft', 'published'), defaultValue: 'draft' },
      categoryId: {
        type: Sequelize.INTEGER,
        references: { model: 'NewsCategory', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('NewsArticle');
  }
};
