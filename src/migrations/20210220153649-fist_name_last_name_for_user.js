'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'firstName',
      {
        type: Sequelize.STRING,
        allowNull: true
      }
    ).then(() => {
      return queryInterface.addColumn('users', 'lastName',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      );
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users', // name of Source model
      'firstName' // key we want to remove
    )
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'users', // name of the Target model
          'lastName' // key we want to remove
        );
      });
  }
};
