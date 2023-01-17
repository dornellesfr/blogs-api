'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

const blogPostsModel = (sequelize, DataTypes) => {
  const blogPosts = sequelize.define('BlogPost', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    tableName: 'blog_posts',
    timestamps: false,
    underscored: true,
  });

  blogPosts.associate = (models) => {
    blogPosts.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });
  }

  return blogPosts;
};

module.exports = blogPostsModel;