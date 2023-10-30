const express = require('express')
const multer = require('multer')
const allRouter = express.Router()
let getFields = multer()

const {Houses,Users,Enquiries} = require('../models/allSchemas')


allRouter.get('/', async(req,res)=>{
    const housesData = await Houses.find({})
    try{
        res.send(housesData)
    }
    catch(error){
        res.status(500).send(error)
    }
})

//to store users' data
allRouter.post('/signup',getFields.none(), async (req,res)=>{
    try{
        const newuser = new Users(req.body)
        let user = await newuser.save()
        user = user.toObject()
        res.send(user)
    }
    catch(error){
        res.status(500).send(error)
    }
})

//To authenticate the user
allRouter.post('/login',getFields.none(), async (req,res)=>{
   
   let user = await Users.findOne({email:req.body.email,password:req.body.password})
    try{
        if(user)
            res.send(user);
        else
            res.send('Authentication Failed')
    }
    catch(error){
        res.status(500).send(error)
    }
})

//To store the enquiry data
allRouter.post('/register',getFields.none(), async (req,res)=>{
    const newEnquiry = new Enquiries(req.body)
    let enquiry = await newEnquiry.save()
    enquiry = enquiry.toObject()
     try{
        res.send(enquiry);
     }
     catch(error){
         res.status(500).send(error)
     }
 })

 allRouter.get('/allenquiries', async(req,res)=>{
    const enquiryData = await Enquiries.find({})
    try{
        res.send(enquiryData)
    }
    catch(error){
        res.status(500).send(error)
    }
 })
 
module.exports = allRouter