const mongoose = require("mongoose")

const HouseSchema = mongoose.Schema({
    _id:Number,
    address:String,
    county:String,
    description:String,
    price:Number,
    photo:String
})

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,    //required make it to be filled out mandotory
        // index: true, unique:true, sparse:true
        // index:{name:1, unique:true}
    },
    email:{
        type:String,
        required:true,   //required make it to be filled out mandotory
        index:{unique:true}
    },
    password:{
        type:String,
        required:true    //required make it to be filled out mandotory
    },
    gender:{
        type:String,
        enum:['Male','Female','Rather Not to Say'],
        default:'Rather Not to Say'
    },
    role:{
        type:String,
        enum:['customer','realtor'],
        default:'customer'
    }
})

const EnquirySchema = mongoose.Schema({
    ename:{
        type:String,
        required:true    
    },
    email:{
        type:String,
        required:true  
    }, 
    remarks:{
        type:String,
        required:true   
    },
    date:{
        type:Date,
        default:Date.now
    },
    houseId:{
        type:Number,
        required:true
    }
})

const Houses = mongoose.model('House',HouseSchema)
const Users = mongoose.model('User',UserSchema)
const Enquiries = mongoose.model('Enquiry',EnquirySchema)

module.exports = {Houses,Users,Enquiries}