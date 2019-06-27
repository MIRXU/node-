const express=require("express")
const router=express.Router()
const fs=require("fs")
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
    // res.cookie("user", JSON.stringify(req.body));
    res.render("index")
})
router.post("/login",(req,res,next)=>{
    userModle.findUserWithUsernameAndPassword(req,res,next)
})

module.exports =router