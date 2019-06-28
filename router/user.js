const express=require("express")
const router=express.Router()
const usersql=require('../db/userdb')
const usermodle=require('../dbmodle/usermodle')
var responseData;
router.use(function(req,res,next){
    responseData={
        success:0,
        message:''
    }
    next()
})
router.get("/register",(req,res,next)=>{
    res.render("register")
})
router.post("/add",(req,res,next)=>{
    usermodle.insertUser(req,res,next,responseData)
})
router.get("/findUserWithUsernameAndPassword",(req,res,next)=>{
    usermodle.findUserWithUsernameAndPassword(responseData)
})
router.get("/findAllUser",(req,res,next)=>{
    usermodle.findAllUser(responseData)
})
router.get("/findUserWithUsername",(req,res,next)=>{
    usermodle.findUserWithUsername(responseData)
})
router.post("/deletebyid",(req,res,next)=>{
    usermodle.deletebyid(responseData)
})
router.post("/updataUserWithUsernameAndPassword",(req,res,next)=>{
    usermodle.updataUserWithUsernameAndPassword(responseData)
})
router.post("/findUserWithUsername",(req,res,next)=>{
    usermodle.findUserWithUsername(responseData)
})
router.post("/updataUserWithPassword",(req,res,next)=>{
    usermodle.updataUserWithPassword(responseData)
})
module.exports =router