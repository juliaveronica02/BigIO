'use strict';
module.exports = (sequelize, DataTypes) => {
  const Surveyor = sequelize.define('Surveyor', {
    name: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});
  Surveyor.associate = function(models) {
    // associations can be defined here
  };
  return Surveyor;
};