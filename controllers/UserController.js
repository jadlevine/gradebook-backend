const { User } = require('../models')

const GetUsers = async (req, res) => {
  try {
    const users = await Users.findAll()
    res.send(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetUser = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        id: req.params.users_id
      }
    })
    res.send(user)
  } catch (error) {
    throw error
  }
}

const CreateUser = async (req, res) => {
  try {
    const user = await Users.create({ ...req.body })
    res.send(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateUser = async (req, res) => {
  try {
    const user = await Users.update(
      { ...req.body },
      { where: { id: req.params.users_id }, returning: true }
    )
    res.send(user)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteUser = async (req, res) => {
  try {
    await Users.destroy({ where: { id: req.params.users_id } })
    res.send({ msg: 'User Deleted', payload: req.params.user_id, status: 'Ok' })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetUsers,
  GetUser,
  CreateUser,
  UpdateUser,
  DeleteUser
}
