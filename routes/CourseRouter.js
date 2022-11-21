const router = require('express').Router()
const controller = require('../controllers/CourseController')

router.get('/', controller.GetCourses)
router.get('/:course_id', controller.GetCourse)
router.post('/register', controller.CreateCourse)
router.put('/:course_id', controller.UpdateCourse)
router.delete('/:course_id', controller.DeleteCourse)

module.exports = router
