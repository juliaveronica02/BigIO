'use strict';
module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    surveyorID: DataTypes.BIGINT
  }, {});
  Admin.associate = function(models) {
    // associations can be defined here
    Admin.belongsTo(models.Surveyor, {
      as: "surveyor",
      foreignKey: "surveyorID",
    })
  };
  return Admin;
};