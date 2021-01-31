'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      company.hasMany(models.user);
    }
  };

  company.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,

    },

    operating_countries: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue('operatingCountries').split(';')
      },
      set(val) {
        this.setDataValue('operatingCountries', val.join(';'));
      }
    }

  }, {
    sequelize,
    modelName: 'company',
    underscored: true,
  });

  return company;
};