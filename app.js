const express=require("express")
const app=express()
const swig=require("swig")
const bodyPaeser =require('body-parser')
const path=require("path")
const cookieParser = require('cookie-parser');

// //若需要使用签名，需要指定一个secret,字符串,否者会报错
// app.use(cookiePareser('xyj'));
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(bodyPaeser.urlencoded({
    extended:true
}))
app.use(cookieParser());
//设置渲染文件的目录
app.set('views','./views');
//设置html模板渲染引擎
app.engine('html',swig.renderFile);
//设置渲染引擎为html
app.set('view engine','html');
//处理静态文件

app.use("/login",require("./router/login"))
app.use("/user",require("./router/user"))


// app.listen(1234)
module.exports =app