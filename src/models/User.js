'use strict';

/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * @returns 
 */

const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    image: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      foreingKey: 'userId', as: 'posts'
    });
  }
  
  return User;
};


module.exports = userModel;