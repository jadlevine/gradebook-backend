const router = require('express').Router()
const controller = require('../controllers/StudentController')

router.get('/', controller.GetStudents)
router.get('/:student_id', controller.GetStudent)
router.post('/register', controller.CreateStudent)
router.put('/:student_id', controller.UpdateStudent)
router.delete('/:student_id', controller.DeleteStudent)

module.exports = router
