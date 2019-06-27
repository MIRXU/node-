const express=require("express")
const router=express.Router()
const fs=require("fs")
const userModle=require('../dbmodle/usermodle')



router.get("/register",(req,res,next)=>{
    res.render("register")
})

router.post("/add",(req,res,next)=>{
    userModle.insertUser(req,res,next)
})

module.exports =router