const User = require('../Models/UserModel.js')
const bcrypt = require ('bcrypt')
const jwt = require("jsonwebtoken")


const Admin = require("../Models/AdminModel.js")

const userReg = async(req,res)=>{
        try {

            console.log("user here");
            const{name,email,mobile,password} = req.body
            const exist = await User.findOne({email:email})
            if(exist){
                console.log("email alredy exists");
                return res.status(200).json({alert:"Email already Exists",status:false})
            }else{
               
                const hashPassword = await bcrypt.hash(password,10)
                const newUser = await User.create({
                    name:name,
                    email:email,
                    mobile:mobile,
                    password:hashPassword
                })
                const token = jwt.sign({ userId : newUser._id } , "jwtSecret" ,{ expiresIn : "1m" })
                return res.status(200).json({ token: token ,user:newUser, alert:'Registred', status: true});
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'Internal Server Error' });
        }
 
}
const userLogin = async (req,res)=>{
    try {
        console.log("login function");
        const { email,password } = req.body
        const exists = await User.findOne({email : email})
        if(exists){
            const access = await bcrypt.compare(password,exists.password)
            
            if(access){
                const token = jwt.sign({ userId: access._id },"jwtSecret" ,{ expiresIn : "1m" })
                return res.status(200).json({ user:exists, token:token, message:"login", status:true})

            }else{
                return res.status(404).json({alert:"Password is wrong",status:false})
            }
        }else{
            return res.status(201).json({alert:"No Account in this Email",status:false})
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    userReg,
    userLogin
}