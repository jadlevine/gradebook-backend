'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'studentscourses',
      [
        {
          studentId: 1,
          courseId: 1,
          score: 93,
          letter: 'A',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 1,
          courseId: 2,
          score: 80,
          letter: 'B',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 1,
          courseId: 3,
          score: 80,
          letter: 'B',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 1,
          courseId: 4,
          score: 80,
          letter: 'B',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 2,
          courseId: 1,
          score: 80,
          letter: 'B',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 2,
          courseId: 2,
          score: 95,
          letter: 'A',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 3,
          courseId: 1,
          score: 80,
          letter: 'B',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 3,
          courseId: 3,
          score: 90,
          letter: 'A',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 4,
          courseId: 1,
          score: 80,
          letter: 'B',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          studentId: 4,
          courseId: 4,
          score: 80,
          letter: 'B',
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
