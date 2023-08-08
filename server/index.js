const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const UserRoutes = require('../server/Routes/UserRoutes')
const AdminRoutes = require('../server/Routes/AdminRoutes')
require('dotenv').config();

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("mongoDB conected");
}).catch(err=>{
    console.log(err.message);
})

app.use(cors({
    origin:['http://localhost:3000'],
    methods:['GET','POST'],
    credentials:true
}))
const UserRouter=require('./Routes/UserRoutes')
app.use('/',UserRouter)

const AdminRouter=require('./Routes/AdminRoutes')
app.use('/admin',AdminRouter)

app.listen(4000,()=>{
    console.log("server Running at port 4000");
})


app.use('/',UserRoutes)
app.use('/admin',AdminRoutes)