'use strict';

module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('food', {
    entre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mealType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    interest: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};