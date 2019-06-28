const express=require("express")
const router=express.Router()
const userModle=require('../dbmodle/usermodle')

var responseData;

router.use(function(req,res,next){
    responseData={
        success:0,
        message:''
    }
    next()
})

router.get("/",(req,res,next)=>{
    res.render("index")
})
router.post("/login",(req,res,next)=>{
    userModle.findUserWithUsernameAndPassword(req,res,next,responseData)
})

module.exports =router