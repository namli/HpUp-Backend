'use strict';

const faker = require('faker');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      username: 'jonh',
      email: faker.internet.email(),
      password: '$2b$10$wQEu819hbX1duHq4c0f81ORJZxAGWQxMYuvKHNYPpmEgTRN7qwmTi',
      about: faker.lorem.paragraph(3),
      remainingDays: faker.random.number({ min: 5, max: 50 }),
      role: 'employer',
      companyId: 1,
      requestId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }, {
      username: 'silvia',
      email: faker.internet.email(),
      password: '$2b$10$wQEu819hbX1duHq4c0f81ORJZxAGWQxMYuvKHNYPpmEgTRN7qwmTi',
      about: faker.lorem.paragraph(3),
      remainingDays: faker.random.number({ min: 5, max: 50 }),
      role: 'employee',
      companyId: 1,
      requestId: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
