'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Courses.belongsTo(modes.Users, { foreignKey: 'PK' })
      Courses.hasMany(models.Students, {
        as: 'studentscourses',
        through: models.StudentsCourses,
        foreignKey: 'PK'
      })
    }
  }
  courses.init(
    {
      PK: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Courses',
      tableName: 'courses'
    }
  )
  return courses
}
