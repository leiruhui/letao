// 引入mysql模版
const mysql = require('mysql')
// 创建联接
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'mysql_001'   
})
module.exports = conn