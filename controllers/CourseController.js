const { Courses } = require('../models')

const GetCourses = async (req, res) => {
  try {
    const courses = await Courses.findAll()
    res.send(courses)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetCourse = async (req, res) => {
  try {
    const course = await Courses.findOne({
      where: {
        id: req.params.course_id
      }
    })
    res.send(course)
  } catch (error) {
    throw error
  }
}

const CreateCourse = async (req, res) => {
  try {
    const course = await Courses.create({ ...req.body })
    res.send(course)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateCourse = async (req, res) => {
  try {
    const course = await Courses.update(
      { ...req.body },
      { where: { id: req.params.course_id }, returning: true }
    )
    res.send(course)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteCourse = async (req, res) => {
  try {
    await Courses.destroy({ where: { id: req.params.course_id } })
    res.send({
      msg: 'Student Deleted',
      payload: req.params.course_id,
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
