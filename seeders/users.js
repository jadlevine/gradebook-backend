'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Erwin',
          email: 'eo99@mail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Philip',
          email: 'p45@mail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Josh',
          email: 'j13@mail.com',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
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
