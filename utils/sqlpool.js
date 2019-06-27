const mysql=require('mysql')

const connect=mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'test'
})
module.exports=connect