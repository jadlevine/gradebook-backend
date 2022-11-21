'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Studentscourses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  Studentscourses.init(
    {
      PK: DataTypes.INTEGER,
      studentId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'students',
          key: 'PK'
        }
      },
      courseId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'courses',
          key: 'PK'
        }
      },
      score: DataTypes.INTEGER,
      letter: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Studentscourses',
      tableName: 'studentscourses'
    }
  )
  return Studentscourses
}
