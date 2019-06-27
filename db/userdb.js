const  mysql={
    insertUser:'insert into user set ?',
    findUserById:'select * from user where id = ?',
    findUserWithUsernameAndPassword:'select * from user where username = ? and password = ?',
    findUserWithUsername:'select * from user where username = ?',
    findAllUser:'select * from user',
    deleteUserById:'delete from user where id = ?',
    updataUserWithUsernameAndPassword:'update user set username =?,password=? where id=?',
    updataUserWithUsername:'update user set username =? where id=?',
    updataUserWithPassword:'update user set password=? where id=?'
}
module.exports=mysql