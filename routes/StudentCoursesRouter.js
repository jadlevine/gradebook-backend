const router = require('express').Router()
const controller = require('../controllers/StudentCoursesController')

router.get('/courses/:studentId', controller.GetCoursesFromStudent)
router.get('/students/:courseId', controller.GetStudentsFromCourse)

module.exports = router
