'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    posts_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  posts.associate = function(models) {
    // associations can be defined here
  };
  return posts;
};