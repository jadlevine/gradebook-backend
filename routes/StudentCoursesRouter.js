const router = require('express').Router()
const controller = require('../controllers/StudentCoursesController')

router.get('/courses/:student_id', controller.GetCoursesFromStudent)
router.get('/students/:course_id', controller.GetStudentsFromCourse)

module.exports = router
