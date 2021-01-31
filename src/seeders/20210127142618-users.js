'use strict';

const faker = require('faker');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      username: 'jonh',
      email: faker.internet.email(),
      password: faker.internet.password(),
      about: faker.lorem.paragraph(3),
      remaining_days: faker.random.number({ min: 5, max: 50 }),
      role: 'employer',
      companies_id: 1,
      requests_id: null,
      created_at: new Date(),
      updated_at: new Date()
    }, {
      username: 'silvia',
      email: faker.internet.email(),
      password: faker.internet.password(),
      about: faker.lorem.paragraph(3),
      remaining_days: faker.random.number({ min: 5, max: 50 }),
      role: 'employee',
      companies_id: 1,
      requests_id: null,
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
