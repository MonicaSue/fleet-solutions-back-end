"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Maintenance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Maintenance.belongsTo(models.Av, {
        foreignKey: "avId",
      });

      Maintenance.belongsTo(models.Profile, {
        foreignKey: "profileId",
      });
    }
  }
  Maintenance.init(
    {
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      partsCost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0, //added
      },
      laborCost: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0, //added
      },
      date: {
        type: DataTypes.STRING,
        allowNull: true, //removed
      },
      notes: DataTypes.STRING,
      maintenanceStatus: {
        type: DataTypes.ENUM("Completed", "In Progress", "In Queue"),
        defaultValue: "In Queue",
      },
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
      modelName: "Maintenance",
    }
  );
  return Maintenance;
};
