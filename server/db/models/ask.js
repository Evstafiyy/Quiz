'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ask extends Model {
    static associate(models) {
		this.belongsTo(models.Category, { foreignKey: 'category_id' }); 
    }
  }
  Ask.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    image: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ask',
  });
  return Ask;
};