'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Courses.belongsTo(models.Users, { foreignKey: 'PK' })
      Courses.belongsToMany(models.Students, {
        // as: 'courses',
        foreignKey: 'courseId',
        through: models.StudentsCourses
      })
    }
  }
  Courses.init(
    {
      // PK: DataTypes.INTEGER,
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
