'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('users', 'requestId',
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'requests',
          key: 'id'
        }
      }
    )
      .then(() => {
        return queryInterface.addColumn('users', 'companyId',
          {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
              model: 'companies',
              key: 'id'
            }
          }
        );
      });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'users', // name of Source model
      'requestId' // key we want to remove
    )
      .then(() => {
        // remove Payment hasOne Order
        return queryInterface.removeColumn(
          'users', // name of the Target model
          'companyId' // key we want to remove
        );
      });
  }
};
