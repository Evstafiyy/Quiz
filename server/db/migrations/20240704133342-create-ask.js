'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Asks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      category_id: {
        type: Sequelize.INTEGER,
		  references: {
			model: 'Categories',
			key: 'id', 
			},
			onDelete: 'CASCADE',
			onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
		  defaultValue: Sequelize.fn('NOW'),

      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
		  defaultValue: Sequelize.fn('NOW'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Asks');
  }
};