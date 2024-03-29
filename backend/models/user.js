"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      firstName: {
        type: DataTypes.STRING,
        primaryKey: false,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        primaryKey: false,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        primaryKey: false,
        allowNull: false,
        unique: true,
      },
      userName: {
        type: DataTypes.STRING,
        primaryKey: false,
        allowNull: false,
        unique: true,
      },
      address: {
        type: DataTypes.STRING,
        primaryKey: false,
        allowNull: true,
      },
      latitude: {
        type: DataTypes.STRING,
        primaryKey: false,
        allowNull: true,
      },
      longitude: {
        type: DataTypes.STRING,
        primaryKey: false,
        allowNull: true,
      },
    },

    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
