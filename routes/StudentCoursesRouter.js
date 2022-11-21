const router = require('express').Router()
const controller = require('../controllers/StudentCoursesController')

router.get('/studentId', controller.GetCoursesFromStudent)
router.get('/courseId', controller.GetStudentsFromCourse)

module.exports = router
