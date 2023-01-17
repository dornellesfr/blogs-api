'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

const categoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: DataTypes.STRING
  }, {
    tableName: 'categories',
    timestamps: false,
  });
  
  return Category;
};

module.exports = categoryModel;