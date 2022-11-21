'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          PK: 1,
          name: 'Erwin',
          email: 'eo99@mail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          PK: 2,
          name: 'Philip',
          email: 'p45@mail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          PK: 3,
          name: 'Josh',
          email: 'j13@mail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          PK: 4,
          name: 'Aekangi',
          email: 'a65@mail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
