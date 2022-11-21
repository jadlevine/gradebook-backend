const { Courses } = require('../models')


const GetCourses = async (req, res) => {
  try {
    const students = await Courses.findAll()
    res.send(students)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetCourse = async (req, res) => {
  try {
    const student = await Courses.findOne({
      where: {
        id: req.params.student_id
      }
    })
    res.send(student)
  } catch (error) {
    throw error
  }
}

const CreateCourse = async (req, res) => {
  try {
    const student = await Courses.create({ ...req.body })
    res.send(student)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateCourse = async (req, res) => {
  try {
    const student = await Courses.update(
      { ...req.body },
      { where: { id: req.params.student_id }, returning: true }
    )
    res.send(student)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteCourse = async (req, res) => {
  try {
    await Courses.destroy({ where: { id: req.params.student_id } })
    res.send({
      msg: 'Student Deleted',
      payload: req.params.student_id,
      status: 'Ok'
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetCourses,
  GetCourse,
  CreateCourse,
  UpdateCourse,
  DeleteCourse
}
