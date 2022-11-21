const { StudentsCourses } = require('../models')

const GetStudentsFromCourse = async (req, res) => {
  try {
    const students = await StudentsCourses.findAll({
      include: [{ model: Courses, as: 'courseId' }]
    })
    res.send(students)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetCoursesFromStudent = async (req, res) => {
  try {
    const courses = await StudentsCourses.findAll({
      include: [{ model: Students, as: 'studentId' }]
    })
    res.send(courses)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  GetStudentsFromCourse,
  GetCoursesFromStudent
}
