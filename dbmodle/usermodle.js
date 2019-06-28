const usersql=require('../db/userdb')
const query=require('../utils/sqlpool')
module.exports ={
    insertUser:function(req,res,next,responseData) {
        query(usersql.findUserWithUsername,[req.username],(err,result,fields)=>{
            if(err){
                responseData.success=0;
                responseData.message='用户已存在，请登录！'
                res.json(responseData)
                return ;
            }else{
                query(usersql.insertUser,[req.body],(err,result,fields)=>{
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
        query(usersql.findUserWithUsernameAndPassword,[req.body],(err,result,fields)=>{
            if(err){
                responseData.success=0;
                responseData.message="登陆失败！"
                responseData.data=result
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
        query(usersql.findAllUser,[],(err,result,fields)=>{
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
        query(usersql.findUserWithUsernam,[req.body.username],(err,result,fields)=>{
            if(err){
                responseData.success=0;
                responseData.message="查无此人！"
                res.json(responseData)
                return;
            }else{
                responseData.success=1;
                responseData.message="成功！"
                responseData.data=result
                res.json(responseData)
                return;
            }
        })
    },
    deleteUserById:function(req,res,next) {
        query(usersql.findUserById,[req.body.id],(err,result,fields)=>{
            if(err){
                responseData.success=0;
                responseData.message="删除失败！"
                res.json(responseData)
                return;
            }else{
                query(deleteUserById,[req.body.id],(err,result,fields)=>{
                    if(err){
                        responseData.success=0;
                        responseData.message="删除失败！"
                        res.json(responseData)
                        return;
                    }else{
                        responseData.success=1;
                        responseData.message="删除成功！"
                        res.json(responseData)
                        return;
                    }
                })
            }
        })
    },
    updataUserWithUsernameAndPassword:function(req,res,next) {
        query(usersql.findUserWithUsernameAndPassword,[req.body],(err,result,fields)=>{
            if(err){
                responseData.success=0;
                responseData.message="修改失败！"
                res.json(responseData)
                return;
            }else{
                query(usersql.updataUserWithUsernameAndPassword,[user],(err,result,fields)=>{
                    if(err){
                        responseData.success=0;
                        responseData.message="修改失败！"
                        res.json(responseData)
                        return;
                    }else{
                        responseData.success=1;
                        responseData.message="修改成功！"
                        res.json(responseData)
                        return;
                    }
                })
               
            }
        })
       
    },
    updataUserWithUsername:function(req,res,next) {
        query(usersql.findUserWithUsername,[req.body.username],(err,result,fields)=>{
            if(err){
                responseData.success=0;
                responseData.message="修改失败！"
                res.json(responseData)
                return;
            }else{
                query(usersql.updataUserWithUsername,[username],(err,result,fields)=>{
                    if(err){
                        responseData.success=0;
                        responseData.message="修改失败！"
                        res.json(responseData)
                        return;
                    }else{
                        responseData.success=1;
                        responseData.message="修改成功！"
                        res.json(responseData)
                        return;
                    }
                })
               
            }
        })
       
    },
    updataUserWithPassword:function(req,res,next) {
        query(usersql.findUserWithUsername,[req.body.password],(err,result,fields)=>{
            if(err){
                responseData.success=0;
                responseData.message="修改失败！"
                res.json(responseData)
                return;
            }else{
                query(usersql.updataUserWithPassword,[password],(err,result,fields)=>{
                    if(err){
                        responseData.success=0;
                        responseData.message="修改失败！"
                        res.json(responseData)
                        return;
                    }else{
                        responseData.success=1;
                        responseData.message="修改成功！"
                        res.json(responseData)
                        return;
                    }
                })
               
            }
        })
    },
}