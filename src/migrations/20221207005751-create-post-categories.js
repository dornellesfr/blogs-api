'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      post_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
      },
      category_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'categories',
          key: 'id',
        },
      }
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
