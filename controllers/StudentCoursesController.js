const { StudentsCourses } = require('../models')

const GetStudentsFromCourse = async (req, res) => {
  try {
    let courseId = parseInt(req.params.course_id)
    const students = await StudentsCourses.findAll({
      where: { courseId }
      // include: [{ model: Courses, as: 'courseId' }]
    })
    res.send(students)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const GetCoursesFromStudent = async (req, res) => {
  try {
    let studentId = parseInt(req.params.student_id)
    const courses = await StudentsCourses.findAll({
      where: { studentId }
      // include: [{ model: Courses, as: 'courseId' }]
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
