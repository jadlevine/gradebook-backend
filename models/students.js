'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Students.belongsTo(modes.Users, { foreignKey: 'PK' })
      Students.hasMany(models.Courses, {
        as: 'studentscourses',
        through: models.StudentsCourses,
        foreignKey: 'PK'
      })
    }
  }
  students.init(
    {
      PK: DataTypes.INTEGER,
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
  return students
}
