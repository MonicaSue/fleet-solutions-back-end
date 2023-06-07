'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.changeColumn('Maintenances', 'partsCost', {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    });
    await queryInterface.changeColumn('Maintenances', 'laborCost', {
      type: Sequelize.FLOAT,
      defaultValue: 0,
    });
    await queryInterface.changeColumn('Maintenances', 'date', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('Maintenances', 'partsCost');
    await queryInterface.removeColumn('Maintenances', 'laborCost');
    await queryInterface.removeColumn('Maintenances', 'date');
  }
};
