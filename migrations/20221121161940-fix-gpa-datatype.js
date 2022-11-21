'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('students', 'gpa', {
      type: Sequelize.DOUBLE
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn('students', 'gpa', {
      type: Sequelize.NUMBER
    })
  }
}
