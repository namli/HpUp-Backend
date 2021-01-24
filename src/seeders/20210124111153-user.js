'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const employer = await queryInterface.sequelize.query(
      `SELECT id from usertypes WHERE title = 'Employer';`
    );
    const employerId = employer[0][0].id;

    const company = await queryInterface.sequelize.query(
      `SELECT id from usertypes WHERE title = 'Company';`
    );
    const companyId = company[0][0].id;

    await queryInterface.bulkInsert('users', [{
      userTypeId: companyId,
      username: 'company',
      email: 'company@company.com',
      password: '',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userTypeId: employerId,
      username: 'employer',
      email: 'employer@employer.com',
      password: '',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
