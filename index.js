//import express from 'express'
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = express()
const cors = require('cors')
const allRouter = require('./routes/allRoutes')
dotenv.config()

//require cors
//set cors policy to allow requests from localhost:3000
let corspolicy = {
    origin:process.env.FRONTEND_URL
}
app.use(cors(corspolicy))
app.use(express.json());


const db = module.exports = async ()=>{
    try{
       await mongoose.connect(process.env.DBURL,{
            user:process.env.DBUSERNAME,
            pass:process.env.DBPASSWORD,
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('MongoDB Connection is Successful')
    }
    catch(error){
        console.log(error);
        console.log('MongoDB Connection is failed')
    }
}
db();

app.use('/',(req,res,next)=>{
    console.log('A new request received at '+ new Date(Date.now()));
    next()
})

app.use('/',allRouter)


app.listen(process.env.PORT,()=>{
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})


