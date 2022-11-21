'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'studentscourses',
      [
        {
          PK: 1,
          studentId: 1,
          courseId: 1,
          score: 93,
          letter: 'test letter 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          PK: 2,
          studentId: 2,
          courseId: 2,
          score: 95,
          letter: 'test letter 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          PK: 3,
          studentId: 3,
          courseId: 3,
          score: 90,
          letter: 'test letter 1',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          PK: 4,
          studentId: 4,
          courseId: 4,
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
