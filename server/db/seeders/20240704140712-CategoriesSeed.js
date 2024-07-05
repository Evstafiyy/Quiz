'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	await queryInterface.bulkInsert(
      'Categories',
      [
        {
			name: 'Угадай страну',
			image: 'https://kult-urolog.com/wp-content/uploads/2023/07/globe_terrestre_scan_globe.jpg',
        },
		  {
			name: 'Цитаты',
			image: 'https://s1.tchkcdn.com/g-LB7hONdudzdWMZJ6xk7tpg/11/131920/660x480/f/0/jjjj.jpg',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
	await queryInterface.bulkDelete('Categories', null, {});
  }
};
