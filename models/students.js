'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    static associate(models) {
      Students.belongsToMany(models.Courses, {
        foreignKey: 'studentId',
        through: models.StudentsCourses
      })
    }
  }
  Students.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      gpa: DataTypes.DOUBLE
    },
    {
      sequelize,
      modelName: 'Students',
      tableName: 'students'
    }
  )
  return Students
}
