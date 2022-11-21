'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'students',
      [
        {
          // PK: 1,
          name: 'Joe',
          email: 'joe99@mail.com',
          gpa: 3.5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // PK: 2,
          name: 'Schmoe',
          email: 'sc45@mail.com',
          gpa: 3.7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // PK: 3,
          name: 'Fulano',
          email: 'f13@mail.com',
          gpa: 3.3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          // PK: 4,
          name: 'Sutana',
          email: 's65@mail.com',
          gpa: 3.1,
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
