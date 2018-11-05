const express = require('express')
const app = express()
// 注册body-parser中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
// 在服务器端启用cors 进行跨域资源共享
const cors = require('cors')
app.use(cors())
// 导入router模块
const router = require('./3.router.js')
app.use(router)


// 让后端项目运行在5001端口上
app.listen(5000,()=>{
console.log('api server running at http://127.0.0.1:5000')
})