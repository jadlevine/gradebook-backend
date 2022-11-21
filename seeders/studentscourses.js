'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'studentscourses',
      [
        {
          PK: 1,
          studentId: 'Joe',
          courseId: 'joe99@mail.com',
          score: 93,
          letter: 'test letter 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          PK: 2,
          studentId: 'Schmoe',
          courseId: 'sc45@mail.com',
          score: 95,
          letter: 'test letter 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          PK: 3,
          studentId: 'Fulano',
          courseId: 'f13@mail.com',
          score: 90,
          letter: 'test letter 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          PK: 4,
          studentId: 'Sutana',
          courseId: 's65@mail.com',
          score: 80,
          letter: 'test letter 1',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('students', null, {})
  }
}
