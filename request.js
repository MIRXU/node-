const request=require("request")
var cheerio = require('cheerio')

request("https://news.qq.com/",(err,response,body)=>{
    
    $ = cheerio.load(body)
    let $list=$(".list .item-no-pic")
    console.log($list)
})