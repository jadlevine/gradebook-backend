'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Students, { foreignKey: 'PK' })
      User.hasMany(models.Courses, { foreignKey: 'PK' })
    }
  }
  users.init(
    {
      PK: DataTypes.INTEGER,
      name: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'users',
      tableName: 'users'
    }
  )
  return users
}
