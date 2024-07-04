'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
		this.belongsTo(models.Category, { foreignKey: 'owner_id' }); 
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