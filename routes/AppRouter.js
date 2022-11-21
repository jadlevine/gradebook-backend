const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const StudentRouter = require('./StudentRouter')
const CourseRouter = require('./CourseRouter')
const StudentsCoursesRouter = require('./StudentCoursesRouter')

Router.use('/users', UserRouter)
Router.use('/students', StudentRouter)
Router.use('/courses', CourseRouter)
Router.use('/studentscourses', StudentsCoursesRouter)

module.exports = Router
