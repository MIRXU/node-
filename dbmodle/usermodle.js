const usersql=require('../db/userdb')
const sqlpool=require('sqlpool')
router.use(function(req,res,next){
    sqlpool.connect()
    next()
})
var responseData;
router.use(function(req,res,next){
    responseData={
        success:0,
        message:''
    }
    next()
})
module.exports ={
    insertUser:function(req,res,next) {
        sqlpool.query(usersql.findUserWithUsername(),[req.username],(err,result)=>{
            if(err){
                responseData.success=0;
                responseData.message='用户已存在，请登录！'
                res.json(responseData)
                return ;
            }else{
                sqlpool.query(usersql.insertUser(),[req.body],(err,result)=>{
                    if(err){
                        responseData.success=0;
                        responseData.message='注册失败！'
                        res.json(responseData)
                        return;
                    }else{
                        responseData.success=1;
                        responseData.message='注册成功，请登录！'
                        res.json(responseData)
                        return;
                    }
                })
               
            }
        })
       
    },
    findUserWithUsernameAndPassword:function(req,res,next) {
        sqlpool.query(usersql.findUserWithUsernameAndPassword()[req.body],(err,result)=>{
            if(err){
                responseData.success=0;
                responseData.message="登陆失败！"
                responseData.data=sqlpool.query(usersql.findUserWithUsernameAndPassword(req.body))
                res.json(responseData)
                return;
            }else{
                responseData.success=1;
                responseData.message="登陆成功！"
                responseData.data=result
                res.json(responseData)
                return;
            }
        })
       
    },
    findAllUser:function() {
        sqlpool.query(usersql.findAllUser(),[],(err,result)=>{
            if(err){
                responseData.success=0;
                responseData.message="未获取到内容！"
                res.json(responseData)
                return
            }else{
                responseData.success=1;
                responseData.message="成功！"
                responseData.data= result
                res.json(responseData)
                return
            }
        })
       
       
    },
    findUserWithUsername:function(req,res,next){
        sqlpool.query(usersql.findUserWithUsername(),[req.body.username],(err,result)=>{
            if(err){
                responseData.success=0;
                responseData.message="查无此人！"
                res.json(responseData)
                return;
            }else{
                responseData.success=1;
                responseData.message="成功！"
                responseData.data=sqlpool.query(usersql.findUserWithUsername(req.body.username))
                res.json(responseData)
                return;
            }
        })
    },
    deleteUserById:function(req,res,next) {
        sqlpool.query(usersql.findUserById(req.body.id),[req.body.id],(err,result)=>{
            if(err){
                responseData.success=0;
                responseData.message="删除失败！"
                res.json(responseData)
                return;
            }else{
                sqlpool.query(deleteUserById(req.body.id))
                responseData.success=1;
                responseData.message="删除成功！"
                res.json(responseData)
                return;
            }
        })
    },
    updataUserWithUsernameAndPassword:function(req,res,next) {
        sqlpool.query(usersql.findUserWithUsernameAndPassword(),[req.body],(err,result)=>{
            if(err){
                responseData.success=0;
                responseData.message="修改失败！"
                res.json(responseData)
                return;
            }else{
                sqlpool.query(usersql.updataUserWithUsernameAndPassword(user))
                responseData.success=1;
                responseData.message="修改成功！"
                res.json(responseData)
                return;
            }
        })
       
    },
    updataUserWithUsername:function(req,res,next) {
        sqlpool.query(usersql.findUserWithUsername(),[req.body.username],(err,result)=>{
            if(err){
                responseData.success=0;
                responseData.message="修改失败！"
                res.json(responseData)
                return;
            }else{
                sqlpool.query(usersql.updataUserWithUsername(username))
                responseData.success=1;
                responseData.message="修改成功！"
                res.json(responseData)
                return;
            }
        })
       
    },
    updataUserWithPassword:function(req,res,next) {
        sqlpool.query(usersql.findUserWithUsername(),[req.body.password],(err,result)=>{
            if(err){
                responseData.success=0;
                responseData.message="修改失败！"
                res.json(responseData)
                return;
            }else{
                sqlpool.query(usersql.updataUserWithPassword(password))
                responseData.success=1;
                responseData.message="修改成功！"
                res.json(responseData)
                return;
            }
        })
    },
}