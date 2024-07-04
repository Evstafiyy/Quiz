'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	await queryInterface.bulkInsert(
      'Categories',
      [
        {
			name: 'Угадай страну по фотографии',
			image: 'location.jpg',
        },
		  {
			name: 'Кто это сказал?',
			image: 'quotes.jpg',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
	await queryInterface.bulkDelete('Categories', null, {});
  }
};
