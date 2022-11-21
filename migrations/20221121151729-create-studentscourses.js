'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('studentscourses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PK: {
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.INTEGER
      },
      courseId: {
        type: Sequelize.INTEGER
      },
      score: {
        type: Sequelize.INTEGER
      },
      letter: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('studentscourses');
  }
};