'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('usertypes', [
      {
        title: 'Employer',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Company',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usertypes', null, {});
  }
};
