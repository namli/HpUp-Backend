'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class request extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      request.belongsTo(models.user)
      request.belongsTo(models.company)
    }
  };
  request.init({
    initDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    type:
    {
      type: DataTypes.ENUM,
      values: ["absence", "holidays"],
      allowNull: false
    },
    status:
    {
      type: DataTypes.ENUM,
      values: ["approved", "open", "declined"],
      allowNull: false
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    documentUrl: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER

  }, {
    sequelize,
    modelName: 'request',
  });
  return request;
};