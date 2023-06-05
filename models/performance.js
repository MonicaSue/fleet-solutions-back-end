"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Performance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Performance.belongsTo(models.Av, {
        foreignKey: "avId",
      });

      Performance.belongsTo(models.Profile, {
        foreignKey: "profileId",
      });
    }
  }
  Performance.init(
    {
      takeover: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      distance: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      notes: DataTypes.STRING,
      profileId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Profiles",
          key: "id",
        },
      },
      avId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "Avs",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Performance",
    }
  );
  return Performance;
};
