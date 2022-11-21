const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const StudentRouter = require('./StudentRouter')
const CourseRouter = require('./CourseRouter')

Router.use('/users', UserRouter)
Router.use('/students', StudentRouter)
Router.use('/courses', CourseRouter)
module.exports = Router
