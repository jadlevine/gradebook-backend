const { Students, Courses, StudentsCourses } = require('../models')

const GetStudents = async (req, res) => {
  try {
    const students = await Students.findAll()
    res.send(students)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetStudent = async (req, res) => {
  try {
    const student = await Students.findOne({
      where: {
        id: req.params.student_id
      },
      include: [Courses]
      // include: [Courses, StudentsCourses]
    })
    res.send(student)
  } catch (error) {
    throw error
  }
}

const CreateStudent = async (req, res) => {
  try {
    const student = await Students.create({ ...req.body })
    res.send(student)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const UpdateStudent = async (req, res) => {
  try {
    const student = await Students.update(
      { ...req.body },
      { where: { id: req.params.student_id }, returning: true }
    )
    res.send(student)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const DeleteStudent = async (req, res) => {
  try {
    await Students.destroy({ where: { id: req.params.student_id } })
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
  GetStudents,
  GetStudent,
  CreateStudent,
  UpdateStudent,
  DeleteStudent
}
