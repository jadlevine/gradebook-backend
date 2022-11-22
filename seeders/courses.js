'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'courses',
      [
        {
          // PK: 1,
          name: 'Bio 101',
          description: 'General Biology',
          creditHours: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // PK: 2,
          name: 'Math 101',
          description: 'Pre-algebra',
          creditHours: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // PK: 3,
          name: 'Phy 101',
          description: 'General Physics',
          creditHours: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // PK: 4,
          name: 'His 101',
          description: 'World history',
          creditHours: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('courses', null, {})
  }
}
