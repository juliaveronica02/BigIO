'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    adminID: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsTo(models.Admin, {
      as: "admin",
      foreignKey: "adminID",
    })
  };
  return User;
};