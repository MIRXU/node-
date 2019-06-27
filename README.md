use project:
tep one:
    npm install
tep two:
    cd node
tep three:
    npm start




mysql use methods:

add:
 insert into user set ?

find:
 select * from user where id =?

update:
 update  user set username=?,password=?

delete:
 delete from user where id = ?

一、more data find:
  select * from user limit page,count

二、more tables find:
 1.交叉查询:不适用任何条件查询 select * from tableA,tableB;
 2.内连接查询：查出两张表都有的字段 select * from tableA,tableB where tableA.key_id=tableB.id;(a表存在b表的外键)
 等同于： select * from tableA inner join tableB on tableA.key_id=tableB.id;
 还可以将*换成字段名称
 3.左连接查询：优先选择左边表的内容： 
 select * from tableA inner join tableB on tableA.key_id=tableB.id优先选择表A
 select * from tableB inner join tableA on tableB.id=tableA.key_id优先选择表B
 4.右连接查询：优先选择右表的内容：
 select * from tableA inner join tableB on tableA.key_id=tableB.id 优先选择表B
 select * from tableB inner join tableA on tableA.key_id=tableB.id 优先选择表A
 5.全外链接：两边的内容都显示，mysql不支持全外链接关键字 full join,但是可以通过union来实现
select * from tableA inner join tableB on tableA.key_id=tableB.id
union
select * from tableA inner join tableB on tableA.key_id=tableB.id
6.通过内连接查询符合条件的数据

select * from tableA,tableB where tableA.key_id=tableB.id and 字段>a;查找符合字段大于a的数据
7.以某个字段升序排序
select * from tableA,tableB where tableA.key_id=tableB.id and 字段>a and 字段>a order by asc;查找大于a并且按照大于a来升序排列
8.子查询：内查询的结果作为外查询的条件，子查询包含的关键字in 、not in、any、all、exists、not exists,还可以包含运算符：=、!=、>、<
查询大于tableB中tableA大于a的数据：
select * from tableB where id in(select key_id from tableA  where  age>a)


三、create table:
  1.create single table:
    create table if not exits tableA(
        id int primary key auto_increment,
        name varchar(10)
    )
  2.create single->doble
  single:
  create table if not exits tableA(
       id int primary key auto_increment,
        name varchar(10)
  )
  doble:foreign key(外键约束)1️⃣主表不能删除从表存在的数据2️⃣从表不能添加主表不存在的数据
   create table if not exits tableB(
       id int primary key auto_increment,
       name varchar(10)
       tableA_id int foreign key(tableA_id) references tableA(id);
  )
  3.create double<->double
  doubleA:
   create table if not exits tableA(
       id int primary key auto_increment,
       name varchar(10)
  )
  doubleB:
   create table if not exits tableB(
       id int primary key auto_increment,
       name varchar(10)
  )
  middle tbale:
  create table middletable(
      id int primary key auto_increment,
      tableA_id int foreign key(tableA_id) references tableA(id),
      tableB_id int foreign key(tableB_id) references tableB(id);
  )

  四、select的书写顺序：
  slect->from->where->group by->having->order by
  执行顺序：
  from->where->group by->having->select->order by

  五、group by:根据by定义的规则对数据进行分组
  select * from tableA inner join tableB on tableA.key_id=tableB.id group by tableA.id;按照tableA的id进行分组


  六、数据聚合：count(a)--遇到a就加1
  最大值和最小值：max(a)--保存其中最大a,min(a)--保存其中最小的a
  求和：sum(a)--对a求和
  求平均值:svg(a)--对a的sum(a)/count(a)

 七、 where和having的使用条件：
  1️⃣两个都可以使用的：已经筛选出a
  select a,b from table where a>1000
  select a,b from table having a>1000
  2️⃣只能用where:没有筛选出a
  select b from table where a>1000
  3️⃣只能用having:设置了别名且使用别名
  select id, avg(a) as tablea from table group by id having tablea > 100
  select id, avg(a) as tablea from table where tablea>100 group by id 
  八、view视图
  1️⃣create view:
  create view view_tableA as select  select * from tableA;
  create view view_tableA as select  a,b,c,d from tableA;
  create view view_tableA(viewa,viewb,viewc,viewd) as select a,b,c,d from tableA;
  2️⃣create more view:
  基于同一个数据库
  create view view_table as(select * from tableA) union all (select * from tableB);
  基于不同数据库
  create view databaseA.view as(select * from databaseA.tableA) union all(select * from databaseB.tableB);视图简历在数据库databaseA
  create view databaseB.view as(select * from databaseA.tableA) union all(select * from databaseB.tableB);视图建立在数据库databaseB
  3️⃣建立在不同服务器：暂不考虑这种情况
  九、limit的用法
  select * from tableA limit a,b;从开始，一共获取b条数据。a是偏移量，b是获取的数量
  十、数据库的其他操作
  删除数据库：drop database databaseA;
  使用数据库：use databaseA;
  显示数据库：show database;
  删除表：drop table tableA;
  显示表结构：desc tableA;
  显示所有表：show tables;
  使用某张表：use tableA;