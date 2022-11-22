'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class StudentsCourses extends Model {
    static associate(models) {}
  }
  StudentsCourses.init(
    {
      studentId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'students',
          key: 'id'
        }
      },
      courseId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'courses',
          key: 'id'
        }
      },
      score: DataTypes.INTEGER,
      letter: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'StudentsCourses',
      tableName: 'studentscourses'
    }
  )
  return StudentsCourses
}
