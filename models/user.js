'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    e_mail: DataTypes.STRING,
    password: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    models.User.hasMany(models.Post)
  };
  return User;
};