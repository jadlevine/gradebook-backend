const router = require('express').Router()
const controller = require('../controllers/UserController')

router.get('/', controller.GetUsers)
router.get('/:user_id', controller.GetUser)
router.post('/register', controller.CreateUser)
router.put('/:user_id', controller.UpdateUser)
router.delete('/:user_id', controller.DeleteUser)

module.exports = router
