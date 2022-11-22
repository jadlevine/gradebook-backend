'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    static associate(models) {
      Courses.belongsToMany(models.Students, {
        foreignKey: 'courseId',
        through: models.StudentsCourses
      })
    }
  }
  Courses.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      creditHours: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Courses',
      tableName: 'courses'
    }
  )
  return Courses
}
