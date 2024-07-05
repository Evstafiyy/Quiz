'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
	await queryInterface.bulkInsert(
      'Asks',
      [
        {
			question: 'Где это?',
			answer: 'Байкал',
			image: '/img/1.baikal.jpg',
			category_id: 1
        },
		  {
			question: 'Где это?',
			answer: 'Чехия',
			image: '/img/2.karlov_most.jpg',
			category_id: 1
        },
		  {
			question: 'Где это?',
			answer: 'Греция',
			image: '/img/3.mykonos.jpg',
			category_id: 1
        },
		  {
			question: 'Где это?',
			answer: 'Германия',
			image: '/img/4.neuschwanstein-castle.webp',
			category_id: 1
        },
		  {
			question: 'Где это?',
			answer: 'Израиль',
			image: '/img/5.stena_placha.webp',
			category_id: 1
        },
		  {
			question: 'Кто это сказал?\r\n Однополые браки — это личное дело мужчины и женщины',
			answer: 'Шварцнеггер',
			image: '',
			category_id: 2
        },
		  {
			question: 'Кто это сказал?\n Мне часто приходится бывать за океаном, например в Канаде',
			answer: 'Бритни',
			image: '',
			category_id: 2
        },
		  {
			question: 'Кто это сказал?\n Я люблю детей. Я даже сам однажды был ребенком',
			answer: 'Круз',
			image: '',
			category_id: 2
        },
		  {
			question: 'Кто это сказал?\n Я абсолютно точно хочу крестить Бруклина, правда пока не определился с религией',
			answer: 'Бекхэм',
			image: '',
			category_id: 2
        },
		  {
			question: 'Кто это сказал?\n Я могу вам сказать только одно — никто никогда не вернется в 2007 год потому, что на дворе 2011 год',
			answer: 'Медведев',
			image: '',
			category_id: 2
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
	await queryInterface.bulkDelete('Asks', null, {});
  }
};
