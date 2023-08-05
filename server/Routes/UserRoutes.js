const express= require('express')
const userRoute = express.Router()
const userController = require('../Controllers/Usercontroller')

userRoute.post('/signup',userController.userReg)
userRoute.post('/login',userController.userLogin)




module.exports = userRoute;