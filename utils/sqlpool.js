const mysql=require('mysql')

const pool=mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'usertest'
})

var query=function(sql,params,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }else{
            conn.query(sql,params,function(qerr,vals,fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(qerr,vals,fields);
            });
        }
    });
};
module.exports=query