const express= require('express')
const userRoute = express.Router()
const userController = require('../Controllers/Usercontroller')
const { uploadOptions } = require('../Multer')

userRoute.post('/signup',userController.userReg)
userRoute.post('/login',userController.userLogin)
userRoute.post("/uploadimg",uploadOptions.single('image'),userController.updateImage)



module.exports = userRoute;