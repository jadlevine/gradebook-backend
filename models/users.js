'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.hasMany(models.Students, { foreignKey: 'PK' })
      Users.hasMany(models.Courses, { foreignKey: 'PK' })
    }
  }
  Users.init(
    {
      PK: DataTypes.INTEGER,
      name: DataTypes.STRING,
      email: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Users',
      tableName: 'users'
    }
  )
  return Users
}
